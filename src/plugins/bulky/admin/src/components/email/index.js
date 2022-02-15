import React, { Component } from 'react';
import pluginId from '../../pluginId';
import { Button } from '@strapi/design-system/Button';
import { ThemeProvider } from '@strapi/design-system/ThemeProvider';
import { lightTheme } from '@strapi/design-system/themes';
import { Combobox, ComboboxOption } from '@strapi/design-system/Combobox';
import { useEffect, useState } from "react";
import { Textarea } from '@strapi/design-system/Textarea';
import { Box } from '@strapi/design-system/Box';
import { Tooltip } from '@strapi/design-system/Tooltip';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import { BaseHeaderLayout, HeaderLayout } from '@strapi/design-system/Layout';
import { TextInput } from '@strapi/design-system/TextInput';
import axios from 'axios';
import { Alert } from '@strapi/design-system/Alert';
import { ProgressBar } from '@strapi/design-system/ProgressBar';


function index() {

    const [post, setPost] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [content, setContent] = useState('');

    const [subject, setSubject] = useState('');
    const [count, setCount] = useState(0);




    React.useEffect(() => {
        // invalid url will trigger an 404 error

        const baseURL = "http://localhost:1337/api/users"
        axios.get(`${baseURL}`).then((response) => {
            setPost(response.data);
        }).catch(error => {
            setError(error);
        });
    }, []);

    const handleSetContent = (e) => {
        setContent(e);
    }

    const setSubjecthandle = (e) => {
        setSubject(e);
    }

    function submit() {

        let localCount = 0;

        post.forEach(user => {
            localCount++;
             setCount(localCount) ;
             sendEmail(user.email,content,subject);
           
           
              console.log(count + " of " + post.length + " sent");
        });
       
        //sendEmail()
    }

    function close() {
        
    }

    function sendEmail(to, body, subject) {

        let data = {
            "to": to,
            "subject": subject,
            "html": body
        }
        const baseURL = "http://localhost:1337/api/email"
        axios.post(`${baseURL}`, data).then((response) => {
        }).catch(error => {
            
            setError(error);
        });
    }

    return (

        <div>
            <ThemeProvider theme={lightTheme}>

                <Box background="neutral100" padding={8} >
                    <BaseHeaderLayout title="Bulky Email Service" as="h2" >
                    </BaseHeaderLayout>

                    <Box padding={10}>

                        <TextInput placeholder="" value={subject} label="Subject" name="subject" hint=""  onChange={e => setSubjecthandle(e.target.value)}  labelAction={<Tooltip description="">
                            <button aria-label="Information about the email" style={{
                                border: 'none',
                                padding: 0,
                                background: 'transparent'
                            }}>
                            </button>
                        </Tooltip>} />
                        

                        <Textarea placeholder="" label="Body" name="content" onChange={e => handleSetContent(e.target.value)} labelAction={<Tooltip description="Content of the tooltip" position="right">
                            <button aria-label="Information about the email" style={{
                                border: 'none',
                                padding: 0,
                                background: 'transparent'
                            }}>

                            </button>
                        </Tooltip>}>
                            {content}
                        </Textarea>
                        <Button size="L" onClick={submit} style={{ top: 20 }}>Send Bulk Email</Button>
                        <br/>
                        <br/>
                        {
                            post &&  <Alert closeLabel="Close alert" style={{top: 20}} onClose={close} title="" variant="success">{count} of {post.length} sent successfully</Alert>
                        }
                       

                       
                    </Box>;
                </Box>
            </ThemeProvider>
        </div>


    )
}

export default index;
