import React, { useState, useEffect } from "react";
import { storage } from "../../firebase"; 
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"; // Funciones de Storage

const FormUpload = () => {
  const [file, setFile] = useState(null) // Para almacenar el archivo seleccionado
  const [uploadedFiles, setUploadedFiles] = useState([]) // Para almacenar la lista de archivos subidos
  const [isUploading, setIsUploading] = useState(false) // Estado de carga

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Guardar el archivo seleccionado
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Por favor selecciona un archivo.")
      return;
    }

    setIsUploading(true);

    try {
      // Crear una referencia dl archivo en Firebase Storage
      const fileRef = ref(storage, `archivos/${file.name}`)

      // Subir el archivo a Firebase Storage
      await uploadBytes(fileRef, file)
      alert("Archivo subido con éxito")

      // Limpiar el archivo seleccionado
      setFile(null);
      document.getElementById('file').value = ''

      // Obtener la lista actualizada de archivos subidos
      fetchUploadedFiles()
    } catch (error) {
      console.error("Error al subir el archivo:", error)
      alert("Hubo un error al subir el archivo.")
    } finally {
      setIsUploading(false)
    }
  };

  // Función para obtener la lista de archivos subidos
  const fetchUploadedFiles = async () => {
    const filesRef = ref(storage, "archivos/")

    try {
      const fileList = await listAll(filesRef);
      const files = await Promise.all(
        fileList.items.map(async (item) => {
          const url = await getDownloadURL(item); // Obtener la URL de descarga
          return { name: item.name, url }
        })
      );
      setUploadedFiles(files)
    } catch (error) {
      console.error("Error al obtener archivos:", error)
    }
  };

  useEffect(() => {
    fetchUploadedFiles(); // Obtener archivos al cargar el componente
  }, []);

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-6">
          {/* Formulario de subida */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">📁 Sube tus archivos</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleFileUpload}>
                <div className="mb-3">
                  <label htmlFor="file" className="form-label fw-semibold">
                    Seleccionar archivo
                  </label>
                  <input
                    type="file"
                    className="form-control form-control-lg"
                    id="file"
                    onChange={handleFileChange}
                    disabled={isUploading}
                  />
                  {file && (
                    <div className="form-text text-success">
                      ✓ Archivo seleccionado: <strong>{file.name}</strong>
                    </div>
                  )}
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg w-100"
                  disabled={!file || isUploading}
                >
                  {isUploading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Subiendo...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-cloud-upload me-2"></i>
                      Subir archivo
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Lista de archivos subidos */}
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h5 className="mb-0">📂 Archivos disponibles</h5>
            </div>
            <div className="card-body">
              {uploadedFiles.length > 0 ? (
                <div className="list-group list-group-flush">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <i className="bi bi-file-earmark text-primary fs-4"></i>
                        </div>
                        <div>
                          <h6 className="mb-0">{file.name}</h6>
                          <small className="text-muted">Clic para descargar</small>
                        </div>
                      </div>
                      <a 
                        href={file.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm"
                      >
                        <i className="bi bi-download me-1"></i>
                        Descargar
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <i className="bi bi-folder2-open text-muted" style={{fontSize: '3rem'}}></i>
                  <p className="text-muted mt-2 mb-0">No hay archivos disponibles</p>
                  <small className="text-muted">Los archivos que subas aparecerán aquí</small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormUpload;