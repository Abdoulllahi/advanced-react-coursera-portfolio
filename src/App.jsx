/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: November 11, 2023 at 4:24:22 PM  CST
 * @ Last Modification Date: November 11, 2023 at 5:27:40 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
    return (
        <ChakraProvider>
            <AlertProvider>
                <main>
                    <Header />
                    <LandingSection />
                    <ProjectsSection />
                    <ContactMeSection />
                    <Footer />
                    <Alert />
                </main>
            </AlertProvider>
        </ChakraProvider>
    );
}

export default App;
