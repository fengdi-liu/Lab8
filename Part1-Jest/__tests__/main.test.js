const formatVolumeIconPath  = require('../assets/scripts/main');

describe('formatVolumeIconPath iconLevel 3', () => {
  test('is Level3', () => {
    expect(formatVolumeIconPath(100)).toContain('3');
  });

  test('is Level3', () => {
    expect(formatVolumeIconPath(67)).toContain('3');
  });

  test('is Level3', () => {
    expect(formatVolumeIconPath(80)).toContain('3');
  });

  test('is Level3', () => {
    expect(formatVolumeIconPath(90)).toContain('3');
  });
});

describe('formatVolumeIconPath iconLevel 2', () => {
  test('is Level2', () => {
    expect(formatVolumeIconPath(34)).toContain('2');
  });

  test('is Level2', () => {
    expect(formatVolumeIconPath(66)).toContain('2');
  });

  test('is Level2', () => {
    expect(formatVolumeIconPath(45)).toContain('2');
  });

  test('is Level2', () => {
    expect(formatVolumeIconPath(55)).toContain('2');
  });
});

describe('formatVolumeIconPath iconLevel 1', () => {
  test('is Leve1', () => {
    expect(formatVolumeIconPath(33)).toContain('1');
  });

  test('is Level1', () => {
    expect(formatVolumeIconPath(15)).toContain('1');
  });

  test('is Level1', () => {
    expect(formatVolumeIconPath(30)).toContain('1');
  });

  test('is Level1', () => {
    expect(formatVolumeIconPath(1)).toContain('1');
  });
});

describe('formatVolumeIconPath iconLevel 0', () => {
  test('is Level0', () => {
    expect(formatVolumeIconPath(0)).toContain('0');
  });
});