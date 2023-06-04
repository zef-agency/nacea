import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

export function useSlider(config: {}) {
  const [currentSlide, setCurrentSlide] = useState<any>(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    ...config,
  });

  return { currentSlide, loaded, sliderRef, instanceRef };
}
