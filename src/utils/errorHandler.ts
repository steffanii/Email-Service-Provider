export function handleError(res: any, error: any) {
  res.status(400).json({ error: error.message || "Something went wrong" });
}
