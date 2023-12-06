import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [showAppleMusicEmbed, setShowAppleMusicEmbed] = useState(false);

 
  const getAppleMusicEmbed = (productId) => {

    //Deathcore
  
    switch (productId) {
      case 1:
        return "https://embed.music.apple.com/us/album/no-mercy-no-forgiveness/1539333842"

      case 2:
        return "https://embed.music.apple.com/us/album/so-this-is-suffering-ep/1496037268"

      case 3: 
        return "https://embed.music.apple.com/us/album/allegiance/1539332470"

      case 4:
        return "https://embed.music.apple.com/us/album/an-awakening/1675493812"

      case 5:
        return "https://embed.music.apple.com/us/album/bleed/429092491"

      case 6:
        return "https://embed.music.apple.com/us/album/ego-death/1514797259"

      case 7:
        return "https://embed.music.apple.com/us/album/virtue-has-few-friends-ep/451960351"

      case 8:
        return "https://embed.music.apple.com/us/album/remote-god-seeker-ep/1680013236"

      case 9:
        return "https://embed.music.apple.com/us/album/wretchedness-ep/1071541240"

      case 10:
        return "https://embed.music.apple.com/us/album/decomposing-normaility-ep/1199327782"

      case 11:
        return "https://embed.music.apple.com/us/album/dissimulation-ep/1630488673"

      case 12: 
        return "https://embed.music.apple.com/us/album/eternal-purgatory-ep/1089031795"

      //Metalcore

      case 13:
        return "https://embed.music.apple.com/us/album/the-cycle-of-hope/271561094"

      case 14: 
        return "https://embed.music.apple.com/us/album/seneca/1642371339"

      case 15:
        return "https://embed.music.apple.com/us/album/vessels/301463540"

      case 16:
        return "https://embed.music.apple.com/us/album/the-naturals/1675513320"

      case 17:
        return "https://embed.music.apple.com/us/album/through-the-eyes-of-ahab/1507598208"

      case 18: 
        return "https://embed.music.apple.com/us/album/mock-heroic/541298870"

      case 19: 
        return "https://embed.music.apple.com/us/album/memphis-may-fire-ep/1643925467"

      case 20:
        return "https://embed.music.apple.com/us/album/hiatus/268503529"

      case 21:
        return "https://embed.music.apple.com/us/album/they-live/293717022"

      case 22:
        return "https://embed.music.apple.com/us/album/accidents-with-intelligence/1546626466"

      case 23:
        return "https://embed.music.apple.com/us/album/definitions/1558588952"

      case 24:
        return "https://embed.music.apple.com/us/album/at-daggers-drawn/1650496688"

      //Post-Hardcore

      case 25:
        return "https://embed.music.apple.com/us/album/the-youthful-preface-to-a-revolutionary-chapter-ep/1441918760"

      case 26: 
        return "https://embed.music.apple.com/us/album/estimated-time-of-arrival-ep/445905115"

      case 27: 
        return "https://embed.music.apple.com/us/album/the-vision-and-reality/1526291373"

      case 28:
        return "https://embed.music.apple.com/us/album/cliche-while-still-captivating/81626466"

      case 29:
        return "https://embed.music.apple.com/us/album/conversations/1640794355"

      case 30: 
        return "https://embed.music.apple.com/us/album/we-are-the-media-exclusive-online-version/273015472"

      case 31:
        return "https://embed.music.apple.com/us/album/i-call-this-abandonment/1533154352"

      case 32:
        return "https://embed.music.apple.com/us/album/soundtrack-to-a-headrush/1441454596"

      case 33: 
        return "https://embed.music.apple.com/us/album/objects-in-mirror-ep/1627281440"

      case 34:
        return "https://embed.music.apple.com/us/album/the-sound-and-the-fury/157270621"

      case 35:
        return "https://embed.music.apple.com/us/album/a-reason-for-treason-ep/518783209"

      case 36:
        return "https://embed.music.apple.com/us/album/the-octopus-in-the-igloo/150380597"

      
    
      default:
        return null;
    }
  };

  if (!product) {
    return null;
  }

  const appleMusicEmbed = getAppleMusicEmbed(product.id);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <button onClick={() => setShowAppleMusicEmbed(!showAppleMusicEmbed)}>
            {showAppleMusicEmbed ? "Hide Tracklist" : "Show Tracklist"}
          </button>
          {showAppleMusicEmbed && appleMusicEmbed && (
            <iframe
              title={`Apple Music Player - ${product.name}`}
              allow="autoplay *; encrypted-media *; fullscreen *"
              frameBorder="0"
              height="450"
              style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', background: 'transparent' }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src={appleMusicEmbed}
            ></iframe>
          )}
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
