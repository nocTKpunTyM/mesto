export const renderLoading = (standartText, thisButton, isLoading) => {
    if (isLoading) {
        thisButton.textContent = 'Сохранение...';
    } else {
        thisButton.textContent = standartText;
    }
}

export const urlForCSS = (url) => {
    return 'url("' + url + '")';
}