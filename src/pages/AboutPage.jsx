import React from 'react';

function AboutPage() {
  return (
    <div className="page-container">
      <h1>À Propos de Nous</h1>
      <p>Cette application est un exemple de PWA (Progressive Web App) construite avec React et Vite.</p>
      <p>Elle démontre les capacités de routage et de conception réactive.</p>
      <hr style={{ margin: '2rem 0', borderColor: '#eee' }} />
      <h2>Soutenez notre projet</h2>
      <p>Si vous appréciez cette application, vous pouvez nous soutenir via PayPal :</p>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="NN9WMMGHWCV2Y" />
        <input type="hidden" name="currency_code" value="EUR" />
        <input type="image" src="https://www.paypalobjects.com/fr_XC/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal, votre réflexe sécurité pour payer en ligne." alt="Acheter" />
      </form>
    </div>
  );
}

export default AboutPage;
