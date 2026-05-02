export function withBasePath(assetPath: string): string {
  if (!assetPath.startsWith('/')) {
    return assetPath;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const normalizedBasePath = basePath === '/' ? '' : basePath.replace(/\/$/, '');

  return `${normalizedBasePath}${assetPath}`;
}
