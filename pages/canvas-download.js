(function () {
  const downloads = new WeakMap();
  const objectUrls = new Set();

  function getDownloadLink() {
    return document.getElementById('download-link');
  }

  window.prepareCanvasDownload = function (canvas, filename) {
    if (!canvas || typeof canvas.toBlob !== 'function') {
      return;
    }

    let download = downloads.get(canvas);

    if (!download) {
      download = {
        generation: 0,
        objectUrl: null
      };
      downloads.set(canvas, download);
    }

    download.generation += 1;
    const generation = download.generation;
    const link = getDownloadLink();

    if (!link) {
      return;
    }

    link.removeAttribute('href');
    link.setAttribute('aria-disabled', 'true');

    canvas.toBlob(function (blob) {
      if (!blob || generation !== download.generation) {
        return;
      }

      if (download.objectUrl) {
        URL.revokeObjectURL(download.objectUrl);
        objectUrls.delete(download.objectUrl);
      }

      const objectUrl = URL.createObjectURL(blob);

      objectUrls.add(objectUrl);
      download.objectUrl = objectUrl;
      link.href = objectUrl;
      link.download = filename;
      link.setAttribute('aria-disabled', 'false');
    }, 'image/png');
  };

  window.addEventListener('pagehide', function () {
    objectUrls.forEach(function (objectUrl) {
      URL.revokeObjectURL(objectUrl);
    });
    objectUrls.clear();
  });
})();
