/* ------------------------------------------------------------------ */
/* Runway ML provider                                                   */
/* Docs: https://docs.dev.runwayml.com                                  */
/* NOTE: Runway's API evolves — verify field names/model IDs against    */
/* your current Runway dashboard/docs if you see request errors.        */
/* ------------------------------------------------------------------ */

const RUNWAY_BASE_URL = "https://api.runwayml.com/v1";
const RUNWAY_API_VERSION = "2024-11-06";

const runwayHeaders = () => ({
  Authorization: `Bearer ${process.env.RUNWAY_API_KEY}`,
  "Content-Type": "application/json",
  "X-Runway-Version": RUNWAY_API_VERSION,
});

/**
 * Start an image-to-video generation task for a single image.
 * Returns Runway's task id.
 */
export async function startRunwayGeneration(imageUrl, prompt) {
  const response = await fetch(`${RUNWAY_BASE_URL}/image_to_video`, {
    method: "POST",
    headers: runwayHeaders(),
    body: JSON.stringify({
      promptImage: imageUrl,
      promptText: prompt,
      model: "gen3a_turbo",
      duration: 5,
      ratio: "1280:768",
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || `Runway request failed with status ${response.status}`);
  }

  return data.id;
}

/**
 * Poll a Runway task by id.
 * Returns { status: "processing" | "completed" | "failed", videoUrl }
 */
export async function checkRunwayStatus(taskId) {
  const response = await fetch(`${RUNWAY_BASE_URL}/tasks/${taskId}`, {
    method: "GET",
    headers: runwayHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || `Runway status check failed with status ${response.status}`);
  }

  if (data.status === "SUCCEEDED") {
    return { status: "completed", videoUrl: data.output?.[0] || null };
  }

  if (data.status === "FAILED") {
    return { status: "failed", videoUrl: null, error: data.failure || "Generation failed" };
  }

  return { status: "processing", videoUrl: null };
}
