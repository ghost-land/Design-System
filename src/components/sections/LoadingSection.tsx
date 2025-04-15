import { Download, Upload, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function LoadingSection() {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const simulateDownload = () => {
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  const toggleLoading = () => {
    setIsLoading(prev => !prev);
    if (!isLoading) {
      setTimeout(() => setIsLoading(false), 3000);
    }
  };

  return (
    <section className="animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <Loader2 className="w-6 h-6 text-orange-300" />
        <h2 className="text-xl sm:text-2xl font-medium">Loading States</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Download Progress */}
        <Card className="card-glass border-ghost p-8">
          <h3 className="text-lg font-medium mb-6">Download Progress</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">downloading.zip</span>
                <span className="text-sm font-medium">{downloadProgress}%</span>
              </div>
              <Progress 
                value={downloadProgress} 
                className="h-2" 
                indicatorClassName="bg-gradient-to-r from-orange-500 to-orange-600 transition-all"
              />
            </div>
            <Button 
              onClick={simulateDownload}
              className="w-full btn-orange"
              disabled={downloadProgress > 0 && downloadProgress < 100}
            >
              <Download className="w-4 h-4 mr-2" />
              {downloadProgress === 100 ? 'Downloaded' : 'Download File'}
            </Button>
          </div>
        </Card>

        {/* Upload Progress */}
        <Card className="card-glass border-ghost p-8">
          <h3 className="text-lg font-medium mb-6">Upload Progress</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">image.png</span>
                <span className="text-sm font-medium">{uploadProgress}%</span>
              </div>
              <div className="relative">
                <Progress 
                  value={uploadProgress} 
                  className="h-2"
                  indicatorClassName="bg-gradient-to-r from-orange-500 to-orange-600 transition-all"
                />
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div className="absolute inset-0 bg-orange-500/10 animate-pulse rounded-full" />
                )}
              </div>
            </div>
            <Button 
              onClick={simulateUpload}
              className="w-full btn-orange"
              disabled={uploadProgress > 0 && uploadProgress < 100}
            >
              <Upload className="w-4 h-4 mr-2" />
              {uploadProgress === 100 ? 'Uploaded' : 'Upload File'}
            </Button>
          </div>
        </Card>

        {/* Spinner Examples */}
        <Card className="card-glass border-ghost p-8 md:col-span-2">
          <h3 className="text-lg font-medium mb-6">Loading Spinners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Basic Spinner */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <Loader2 className="w-8 h-8 animate-spin text-orange-300" />
              </div>
              <span className="text-sm text-muted-foreground">Basic Spin</span>
            </div>

            {/* Gradient Spinner */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 border-4 border-t-orange-500 border-r-orange-500/60 border-b-orange-500/40 border-l-orange-500/20 rounded-full animate-spin" />
              </div>
              <span className="text-sm text-muted-foreground">Gradient</span>
            </div>

            {/* Dots */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-orange-300 rounded-full animate-[bounce_0.5s_ease-in-out_infinite]" />
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-[bounce_0.5s_ease-in-out_0.1s_infinite]" />
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-[bounce_0.5s_ease-in-out_0.2s_infinite]" />
              </div>
              <span className="text-sm text-muted-foreground">Dots</span>
            </div>

            {/* Pulse Ring */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-orange-300 rounded-full animate-ping" />
                <div className="w-8 h-8 border-2 border-orange-300 rounded-full" />
              </div>
              <span className="text-sm text-muted-foreground">Pulse</span>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              onClick={toggleLoading}
              className="btn-orange relative min-w-[200px]"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </div>
              ) : (
                'Click to Load'
              )}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}