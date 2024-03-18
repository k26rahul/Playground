from fastapi import FastAPI, UploadFile

app = FastAPI()


@app.get("/")
def read_root():
  return {"Hello": "World"}


@app.post("/upload")
def read_root(file: UploadFile):
  return {"filename": file.filename}
