import AImg from '../assets/img/section-about-bg.png'
import InfoProduct from '../product/InfoProduct';
import ProductFeaturesText from '../home/ProductFeaturesText';
function ProductFeatures() {
  return (
    <div className='secondSection'>
      <ProductFeaturesText/>
      <figure>
        <img src={AImg} alt="" />
      </figure>
      <InfoProduct/>
    </div>
  );
}

export default ProductFeatures;
