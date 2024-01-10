// Layouts
import { MainLayout } from '@/ui/layouts';
// Views
import { HomeView } from '@/ui/views';


const HomePage = () => {
  return (
    <MainLayout
      pageTitle='Inicio'
      pageDesc=''
      pageKeywords=''
    >
      <HomeView />
    </MainLayout>
  );
}

export default HomePage;
