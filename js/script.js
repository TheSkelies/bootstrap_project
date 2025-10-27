function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Текст скопирован в буфер обмена!');
    }).catch(err => {
        alert('Ошибка при копировании: ' + err);
    });
}

function highlightElement(elementId) {
    const element = document.getElementById(elementId);

    element.classList.add('smooth-border', 'border', 'border-5', 'border-danger');

    element.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
        element.classList.remove('border', 'border-5', 'border-danger');
    }, 1000);
}
