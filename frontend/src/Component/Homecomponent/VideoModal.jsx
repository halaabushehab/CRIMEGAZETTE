import { useState, useEffect } from "react";
import axios from "axios";

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    axios.get("https://docs.api.video/reference/authentication-missing-authorization-header")
      .then((response) => setVideoUrl(response.data.videoUrl))
      .catch((error) => console.error("❌ فشل تحميل الفيديو:", error));
  }, []);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center bg-[var(--primary-color)] text-white px-6 py-3 rounded hover:bg-[var(--button-hover)] transition-colors"
      >
        🎬 شاهد أحدث تقرير
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 max-w-lg relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-gray-700">✖</button>
            <h2 className="text-xl font-bold mb-3">🎥 الفيديو</h2>

            {videoUrl ? (
              <video controls className="w-full">
                <source src={videoUrl} type="video/mp4" />
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            ) : (
              <p className="text-gray-500">جارٍ تحميل الفيديو...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoModal;
