import { SidebarComponent } from "@/components/SidebarComponent";
import { Footer } from "flowbite-react";

export default function Home() {
  return (
    <div className="relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <SidebarComponent/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
      </main>
      <div className="pt-10">
        <Footer container>
          <Footer.Copyright href="#" by="Rayhan Zulfitri" year={2024} />
        </Footer>
      </div>
    </div>
  );
}
