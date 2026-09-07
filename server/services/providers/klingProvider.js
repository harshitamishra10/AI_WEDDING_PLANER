/* ------------------------------------------------------------------ */
/* Kling AI provider                                                    */
/* NOTE: Kling doesn't have one single official self-serve public API — */
/* it's commonly accessed either via Kuaishou's own enterprise API or   */
/* via aggregators (e.g. PiAPI, fal.ai, Segmind). The shape below       */
/* follows Kuaishou's official Kling API structure. If you're using an  */
/* aggregator, adjust KLING_BASE_URL and the request/response fields    */
/* to match that provider's docs.                                       */
/* ------------------------------------------------------------------ */

const KLING_BASE_URL = process.env.KLING_BASE_URL || "https://api-singapore.klingai.com/v1";

const klingHeaders = () => ({
  Authorization: `Bearer ${process.env.KLING_API_KEY}`,
  "Content-Type": "application/json",
});

/**
 * Start an image-to-video generation task for a single image.
 * Returns Kling's task id.
 */
export async function startKlingGeneration(imageUrl, prompt) {
  const response = await fetch(`${KLING_BASE_URL}/videos/image2video`, {
    method: "POST",
    headers: klingHeaders(),
    body: JSON.stringify({
      model_name: "kling-v1",
      image: imageUrl,
      prompt,
      duration: "5",
      mode: "std",
    }),
  });

  const data = await response.json();

  if (!response.ok || data.code !== 0) {
    throw new Error(data?.message || `Kling request failed with status ${response.status}`);
  }

  return data.data.task_id;
}

/**
 * Poll a Kling task by id.
 * Returns { status: "processing" | "completed" | "failed", videoUrl }
 */
export async function checkKlingStatus(taskId) {
  const response = await fetch(`${KLING_BASE_URL}/videos/image2video/${taskId}`, {
    method: "GET",
    headers: klingHeaders(),
  });

  const data = await response.json();

  if (!response.ok || data.code !== 0) {
    throw new Error(data?.message || `Kling status check failed with status ${response.status}`);
  }

  const status = data.data.task_status;

  if (status === "succeed") {
    return { status: "completed", videoUrl: data.data.task_result?.videos?.[0]?.url || null };
  }

  if (status === "failed") {
    return { status: "failed", videoUrl: null, error: data.data.task_status_msg || "Generation failed" };
  }

  return { status: "processing", videoUrl: null };
}
