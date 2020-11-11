import React, {useState,useEffect} from 'react'
import styles from './styles.module.css'
import { message, Spin } from "antd";

export const JumboGrid = ({ getAd, url, page }) => {
  const config = "https://s3.amazonaws.com/dev.nocap.com";

  const FetchInfo = () => {
    const [bannerBottomLeft, setBannerBottomLeft] = useState(null);
    const [bannerTopLeft, setBannerTopLeft] = useState(null);
    const [bannerBottomMid, setBannerBottomMid] = useState(null);
    const [bannerRight, setBannerRight] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    async function get() {
      try {
        const bottomLeft = await getAd("banner-bottom-left", "home");
        setBannerBottomLeft(bottomLeft);
        const right = await props.getAd("banner-right", "home");
        setBannerRight(right);
        const topLeft = await getAd("banner-top-left", "home");
        setBannerTopLeft(topLeft);
        const bottomMid = await getAd("banner-bottom-mid", "home");
        setBannerBottomMid(bottomMid);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    useEffect(() => {
      get();
    }, []);
    return [
      bannerBottomLeft,
      bannerTopLeft,
      bannerBottomMid,
      bannerRight,
      error,
      loading,
    ];
  };

  const [
    bannerBottomLeft,
    bannerTopLeft,
    bannerBottomMid,
    bannerRight,
    error,
    loading,
  ] = FetchInfo();


    return (
      <div>
        <div className="mobile-view">
          <img
            className="right-mobile"
            alt="placeholder"
            src={`${config}${bannerBottomMid}`}
          />
        </div>
        <div className="JumboGrid">
          <div className="jumbo-container">
            <div className="jumbo-item jumbo-item1">
              <div className="jumbo-image-wrapper">
                <img alt="placeholder" src={`${config}${bannerTopLeft}`} />
              </div>
            </div>
            <div className="jumbo-item jumbo-item2">
              <div className="jumbo-image-wrapper">
                <img alt="placeholder" src={`${config}${bannerRight}`} />
              </div>
            </div>
            <div className="jumbo-item jumbo-item3">
              <div className="jumbo-image-wrapper">
                <img alt="placeholder" src={`${config}${bannerBottomLeft}`} />
              </div>
            </div>
            <div className="jumbo-item jumbo-item4">
              <div className="jumbo-image-wrapper">
                <img alt="placeholder" src={`${config}${bannerBottomMid}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
