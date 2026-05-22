const normalizeApiPath = (path) => path.replace(/\/$/, "");

export const VENTAS_API_BASE = normalizeApiPath("/api/v1/ventas");
export const DESPACHOS_API_BASE = normalizeApiPath("/api/v1/despachos");