if (instanceOptions.allowFileEncode) {
    FilePond.registerPlugin(FilePondPluginFileEncode);
}

if (instanceOptions.allowFileMetadata) {
    FilePond.registerPlugin(FilePondPluginFileMetadata);
}

if (instanceOptions.allowFilePoster) {
    FilePond.registerPlugin(FilePondPluginFilePoster);
}

if (instanceOptions.allowFileRename) {
    FilePond.registerPlugin(FilePondPluginFileRename);
}

if (instanceOptions.allowFileSizeValidation) {
    FilePond.registerPlugin(FilePondPluginFileValidateSize);
}

if (instanceOptions.allowFileTypeValidation) {
    FilePond.registerPlugin(FilePondPluginFileValidateType);
}

if (instanceOptions.allowImageExifOrientation) {
    FilePond.registerPlugin(FilePondPluginImageExifOrientation);
}

if (instanceOptions.allowImageCrop) {
    FilePond.registerPlugin(FilePondPluginImageCrop);
}

if (instanceOptions.allowImageEdit) {
    FilePond.registerPlugin(FilePondPluginImageEdit);
}

if (instanceOptions.allowImagePreview) {
    FilePond.registerPlugin(FilePondPluginImagePreview);
}

if (instanceOptions.allowImageResize) {
    FilePond.registerPlugin(FilePondPluginImageResize);
}

if (instanceOptions.allowImageValidateSize) {
    FilePond.registerPlugin(FilePondPluginImageValidateSize);
}

if (instanceOptions.allowImageTransform) {
    FilePond.registerPlugin(FilePondPluginImageTransform);
}

FilePond.setOptions(settingsOptions);
var inputElement = document.querySelector('.' + filepondClass);
const pond = FilePond.create(inputElement, instanceOptions);
