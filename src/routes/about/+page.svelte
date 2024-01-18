<script>
    let file;
    let loading = false;
    let progress = 0;
    let downloadUrl;
  
    function handleFileInput(event) {
      file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const arrayBuffer = reader.result;
        downloadUrl = URL.createObjectURL(new Blob([arrayBuffer]));
      };
      reader.readAsArrayBuffer(file);
    }
  
    function downloadFile() {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = file.name;
      link.click();
    }
  </script>
  
  <input type="file" on:change={handleFileInput} />
  <button on:click={downloadFile}>Download</button>