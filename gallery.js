const galleryPhotos = gallerySections.flatMap(({ id, directory, photos }) =>
    photos.map((photo) => ({
        ...photo,
        source: `images/${directory}/${photo.file}`,
        sectionId: id,
        settings: [
            `${photo.focalLength} mm`,
            `f/${photo.aperture.toLocaleString("de-DE")}`,
            `${photo.exposureTime} s`,
            String(photo.iso)
        ]
    }))
);

const galleryItemTemplate = document.getElementById("gallery-item-template");
const dialog = document.getElementById("gallery-dialog");
const dialogImage = document.getElementById("gallery-dialog-image");
const dialogTitle = document.getElementById("gallery-dialog-title");
const dialogPosition = document.getElementById("gallery-dialog-position");
const dialogSettings = dialog.querySelectorAll(".gallery-dialog-settings dd");
const previousButton = document.getElementById("gallery-dialog-previous");
const nextButton = document.getElementById("gallery-dialog-next");
let activePhotoIndex = 0;
let startedOnBackdrop = false;

function ShowPhoto(index) {
    const photo = galleryPhotos[index];
    activePhotoIndex = index;

    dialogImage.src = photo.source;
    dialogImage.alt = photo.title;
    dialogTitle.textContent = photo.title;
    dialogPosition.textContent = `${index + 1} / ${galleryPhotos.length}`;

    dialogSettings.forEach((field, fieldIndex) => {
        field.textContent = photo.settings[fieldIndex];
    });
}

function MovePhoto(direction) {
    const photoCount = galleryPhotos.length;
    const nextIndex = (activePhotoIndex + direction + photoCount) % photoCount;
    ShowPhoto(nextIndex);
}

galleryPhotos.forEach((photo, index) => {
    const gallery = document.querySelector(`#${photo.sectionId} .gallery-items`);
    const item = galleryItemTemplate.content.firstElementChild.cloneNode(true);
    const image = item.querySelector("img");
    const [focalLength, aperture, exposureTime, iso] = photo.settings;

    image.width = photo.width;
    image.height = photo.height;
    image.src = photo.source;
    item.setAttribute("aria-label", photo.title);
    item.querySelector(".gallery-title").textContent = photo.title;
    item.querySelector(".gallery-settings").textContent =
        `${focalLength} · ${aperture} · ${exposureTime} · ISO ${iso}`;

    item.addEventListener("click", () => {
        ShowPhoto(index);
        dialog.showModal();
    });

    gallery.append(item);
});

previousButton.disabled = galleryPhotos.length < 2;
nextButton.disabled = galleryPhotos.length < 2;
previousButton.addEventListener("click", () => MovePhoto(-1));
nextButton.addEventListener("click", () => MovePhoto(1));
document.getElementById("gallery-dialog-close").addEventListener("click", () => dialog.close());

dialog.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
        return;
    }

    event.preventDefault();
    MovePhoto(event.key === "ArrowLeft" ? -1 : 1);
});

dialog.addEventListener("pointerdown", (event) => {
    startedOnBackdrop = event.target === dialog;
});

dialog.addEventListener("click", (event) => {
    if (startedOnBackdrop && event.target === dialog) {
        dialog.close();
    }
});
