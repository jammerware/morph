import { Component } from '@angular/core';

@Component({
  selector: 'app-paypal-donate',
  template: `
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="business" value="9KLDAVSPSM6ZC" />
      <input type="hidden" name="no_recurring" value="0" />
      <input type="hidden" name="item_name"
          value="I'm so glad you're using Morph! Anything you give will offset server costs for the web application and API. I appreciate it!" />
      <input type="hidden" name="currency_code" value="USD" />
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit"
          title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
  `
})
export class PaypalDonateComponent{
}
