module.exports = {
  testPathForConsistencyCheck: 'some/example.test.tsx',
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace('/src', '/src/__tests__/snapshots') + snapshotExtension,
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace('/__tests__/snapshots', '')
      .slice(0, -snapshotExtension.length),
};
