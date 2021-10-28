describe('App', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should Render list', async () => {
    await expect(element(by.id('root'))).toBeVisible();
  });

  it('should search a veichle', async () => {
    await element(by.id('search-input')).typeText('audi');
    await expect(element(by.id('brand'))).toEqual('Audi');
  });
});
