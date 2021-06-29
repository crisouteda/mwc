import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import {useDataResults} from '../../hooks/queries/user'
import dropImg from '../../assets/icons/consent.svg'
import useModal from '../../hooks/useModal'
import { Container, Button, Help } from './styles'
import { Modal } from "../modal"

export function Dropfiles({setResponse}) {
    const [content, setContent] = useState({})

    const { isShowing, toggle } = useModal();

    const [usedDrop, setUsedDrop] = useState(false)
    const setDataResult = useDataResults()
    
  const onDrop = useCallback((acceptedFiles) => {
    setUsedDrop(true)
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const fileContent = JSON.parse(reader.result)
        setContent(fileContent)
        console.log(fileContent)
      }
      reader.readAsText(file);
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  useEffect(() => {
    if (usedDrop){
      if ( Object.keys(content).length <= 1 ) {
        const list = Object.values(content)[0]
        setDataResult.mutate({
          array: list,
          token: localStorage.getItem("usertoken")
        }, {
          onSuccess: (res) => {
            console.log("success",JSON.stringify(res.ECM))
            setResponse(JSON.stringify(res.ECM))
          },
          onError: (err) => {
            toggle()
            console.log("error",err)
          }
        })
      } else {
        toggle()
      }
    }
  }, [content])

  return (
    <Container>
      <Help onClick={toggle}>Help</Help>
      <Modal isShowing={isShowing} hide={toggle}></Modal>
      <div {...getRootProps()}>
        <img src={dropImg} />
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        {usedDrop && <p>Thanks for your file</p>}
        {Object.keys(content).map((key, i) => <h1 key={i} > {content[key].name}</h1>)}
        <Button>Upload files</Button>
      </div>
    </ Container>
  )
}