import React from 'react';

// component
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import PanelIntro from 'components/elements/PanelIntro';

const Index = ({children}) => {
  return(
    <>
      <div className="indexBg">
      <PanelIntro/>
      <Header theme={'index'}/>
        {children}
      <Footer />        
      </div>

    </>
  );
}

export default Index;  