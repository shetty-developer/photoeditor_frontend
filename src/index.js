import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BlurPage from "./Pages/BlurPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import Resizepage from "./Pages/ResizePage";
import CompletionPage from "./Pages/CompletionPage";
import CompressGifPage from "./Pages/CompressGifPage";
import CompressJpegPage from "./Pages/CompressJpegPage";
import CompressPngPage from "./Pages/CompressPngPage";
import CompressWebppage from "./Pages/CompressWebpPage";
import ConvertGifFormatPage from "./Pages/ConvertGifFormatPage";
import ConvertJpegFormatPage from "./Pages/ConvertJpegFormatPage";
import ConvertPngFormatPage from "./Pages/ConvertPngFormatPage";
import ConvertWebpFormatPage from "./Pages/ConvertWebpFormatPage";
import CropPage from "./Pages/CropPage";
import PageNotFoundpage from "./Pages/PageNotFoundPage";
import RotatePage from "./Pages/Rotatepage";
import SharpenPage from "./Pages/SharpenPage";
import WatermarkPage from "./Pages/WatermarkPage";
import SocialMediaPage from "./Pages/SocialMediaPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/blur" element={<BlurPage />} />
        <Route path="/resize" element={<Resizepage />} />
        <Route path="/completion" element={<CompletionPage />} />
        <Route path="/compressgifimage" element={<CompressGifPage />} />
        <Route path="/compressjpegimage" element={<CompressJpegPage />} />
        <Route path="/compresspngimage" element={<CompressPngPage />} />
        <Route path="/compresswebpimage" element={<CompressWebppage />} />
        <Route path="/convertgifimage" element={<ConvertGifFormatPage />} />
        <Route path="/convertjpegimage" element={<ConvertJpegFormatPage />} />
        <Route path="/convertpngimage" element={<ConvertPngFormatPage />} />
        <Route path="/convertwebpimage" element={<ConvertWebpFormatPage />} />
        <Route path="/crop" element={<CropPage />} />
        <Route path="/rotate" element={<RotatePage />} />
        <Route path="/sharpen" element={<SharpenPage />} />
        <Route path="/watermark" element={<WatermarkPage />} />
        <Route path="/socialmedia" element={<SocialMediaPage />} />
        <Route path="*" element={<PageNotFoundpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
