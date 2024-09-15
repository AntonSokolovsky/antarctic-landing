import { AboutTour } from '../AboutTour';
import { AdditionalInfo } from '../AdditionalInfo';
import { FirstScreen } from '../FirstScreen';
import { Header } from '../Header';

export function MainPage() {
  return (
    <>
      <Header />
      <FirstScreen />
      <AboutTour />
      <AdditionalInfo />
    </>
  );
}
