export async function register() {}

export const onRequestError = async (
  error: { message?: string; digest?: string },
  request: { path?: string; method?: string },
  context: { routerKind?: string; routePath?: string; routeType?: string },
) => {
  console.error(JSON.stringify({
    event: "unhandled_request_error",
    message: error.message ?? "Unknown error",
    digest: error.digest,
    method: request.method,
    path: request.path,
    route: context.routePath,
    routeType: context.routeType,
    timestamp: new Date().toISOString(),
  }));
};
