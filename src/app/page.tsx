import { MainComponent } from "@/components/MainComponent";
import { SidebarComponent } from "@/components/SidebarComponent";
import { Footer } from "flowbite-react";

export default function Home() {
  return (
    <div className="flex overflow-hidden bg-gray-50 dark:bg-gray-900 h-screen">
      <SidebarComponent/>
      <div className="relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <MainComponent/>
        <div className="pt-10">
          <Footer container>
            <Footer.Copyright href="#" by="Rayhan Zulfitri" year={2024} />
          </Footer>
        </div>
      </div>
    </div>
  );
}
