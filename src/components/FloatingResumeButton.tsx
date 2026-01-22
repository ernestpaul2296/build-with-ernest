import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingResumeButton = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleDownloadAndView = () => {
    // Trigger download
    const link = document.createElement("a");
    link.href = "/Ernest_Paul.pdf";
    link.download = "Ernest_Paul_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Open viewer
    setIsViewerOpen(true);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          className="gradient-primary text-primary-foreground font-semibold px-6 glow-primary hover:glow-strong transition-shadow shadow-lg"
          onClick={handleDownloadAndView}
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </Button>
      </motion.div>

      {/* Fullscreen PDF Viewer */}
      <AnimatePresence>
        {isViewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-lg flex flex-col"
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold">Resume - Ernest Paul</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsViewerOpen(false)}
                className="border-border hover:border-primary hover:text-primary"
              >
                <X className="w-4 h-4 mr-2" />
                Close
              </Button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto p-4">
              <iframe
                src="/Ernest_Paul.pdf"
                className="w-full h-full min-h-[calc(100vh-120px)] rounded-lg border border-border"
                title="Ernest Paul Resume"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingResumeButton;
