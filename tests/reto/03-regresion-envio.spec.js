const { test, expect } = require('@playwright/test');

test('RETO 3 - pedidos de Q100 o más deberían conservar envío gratis', async ({ page }) => {
  await page.goto('/');

  const pizza = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Pizza Pepperoni' })
  });

  // TODO 1: cambia la cantidad de Pizza Pepperoni a 2.
  await pizza.getByRole('button', { name: '+' }).click();

  // TODO 2: agrega las 2 pizzas al carrito.
  await pizza.getByRole('button', { name: 'Agregar' }).click();

  // TODO 3: comprueba que el subtotal sea Q110.00.
  await expect(page.getByText('Q110.00', { exact: true })).toBeVisible();

  // TODO 4: comprueba que el envío DEBERÍA ser Q0.00.
  await expect(page.getByText('Q0.00', { exact: true })).toBeVisible();
});