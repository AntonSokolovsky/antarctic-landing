import { TEXT } from '../../../content/content';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { GallerySliderProps } from './GallerySliderProps';
import { useEffect, useState } from 'react';
import { ImageBox } from '../../ImageBox';
import { ButtonEllipse } from '../../ButtonEllipse';

export function percentageOfNumber(number: number, percent: number) {
  return (number * percent) / 100;
}

export function GallerySlider({
  images,
  widthImagePx,
  heightImagePx,
  gapPx,
}: GallerySliderProps) {
  const [widthViewport, setWidthViewport] = useState(window.innerWidth);
  const [buttonVisible, setButtonVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => setWidthViewport(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const dragLeftContrains =
    images.length * (widthImagePx + gapPx) - widthViewport;
  function handleAnimationStart() {
    setButtonVisible(false);
  }
  function handleAnimationEnd() {
    setButtonVisible(true);
  }
  return (
    <Box overflow="hidden" sx={{ cursor: 'grab' }} position={'relative'}>
      {buttonVisible && (
        <Box
          position={'absolute'}
          left={widthImagePx + percentageOfNumber(widthImagePx, 15)}
          top={heightImagePx / 2 - 80}
          zIndex={1}
        >
          <ButtonEllipse
            bgColor="primary.main"
            text={TEXT.gallery.button}
            color="text.secondary"
            variantTypography="buttonTitle2"
            rotate="30deg"
            width="140px"
          />
        </Box>
      )}

      <Box
        component={motion.div}
        drag="x"
        dragConstraints={{ left: -dragLeftContrains, right: 0 }}
        dragElastic={0.3}
        whileTap={{ cursor: 'grabbing' }}
        display={'inline-flex'}
        gap={`${gapPx}px`}
        initial={{ x: -percentageOfNumber(widthImagePx, 80) }}
        onAnimationStart={handleAnimationStart}
        onDragTransitionEnd={handleAnimationEnd}
      >
        {images.map((image, index) => (
          <ImageBox
            key={image + index}
            width={`${widthImagePx}px`}
            height={`${heightImagePx}px`}
            urlImage={image}
          />
        ))}
      </Box>
    </Box>
  );
}
