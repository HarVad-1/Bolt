function showForm(formType) {
    if (formType === 'edit') {
        document.getElementById('editform').style.display = 'block';
        document.getElementById('enterform').style.display = 'none';
    } else if (formType === 'enter') {
        document.getElementById('enterform').style.display = 'block';
        document.getElementById('editform').style.display = 'none';
    }
}