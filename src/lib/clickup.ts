const CLICKUP_API_BASE = 'https://api.clickup.com/api/v2';
const REVIEW_LIST_ID = import.meta.env.CLICKUP_REVIEW_LIST_ID || '901820755196';
const CLICKUP_TOKEN = import.meta.env.CLICKUP_API_TOKEN;

export type PipelineTask = {
  id: string;
  name: string;
  status: string;
  reviewer: string;
  dueDate: string | null;
  clickupUrl: string;
};

const normalizeStatus = (status: string) => {
  const value = status.trim().toLowerCase();
  if (value === 'backlog') return 'Backlog';
  if (value === 'research & write' || value === 'research and write') return 'Research & Write';
  if (value === 'seo check') return 'SEO Check';
  if (value === 'ready to publish') return 'Ready to Publish';
  if (value === 'published') return 'Published';
  return status;
};

const formatDueDate = (timestamp?: string | null) => {
  if (!timestamp) return null;
  const date = new Date(Number(timestamp));
  return Number.isNaN(date.getTime()) ? null : date.toISOString().slice(0, 10);
};

export async function getClickUpReviewTasks(): Promise<{ connected: boolean; tasks: PipelineTask[]; error?: string }> {
  if (!CLICKUP_TOKEN) return { connected: false, tasks: [] };

  try {
    const response = await fetch(`${CLICKUP_API_BASE}/list/${REVIEW_LIST_ID}/task?include_closed=true&subtasks=true`, {
      headers: { Authorization: CLICKUP_TOKEN },
    });
    if (!response.ok) throw new Error(`ClickUp API returned ${response.status}`);

    const data = await response.json();
    const tasks = (data.tasks || []).map((task: any): PipelineTask => ({
      id: task.id,
      name: task.name,
      status: normalizeStatus(task.status?.status || 'Backlog'),
      reviewer: task.assignees?.map((assignee: any) => assignee.username).join(', ') || 'Unassigned',
      dueDate: formatDueDate(task.due_date),
      clickupUrl: task.url || `https://app.clickup.com/t/${task.id}`,
    }));

    return { connected: true, tasks };
  } catch (error) {
    return { connected: false, tasks: [], error: error instanceof Error ? error.message : 'Unknown ClickUp error' };
  }
}
