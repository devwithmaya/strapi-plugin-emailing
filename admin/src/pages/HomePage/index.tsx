import React, { useState, useEffect } from 'react';
import { Box, Typography, BaseHeaderLayout, Button, Table, Thead, Tbody, Tr, Th, Td, BaseCheckbox, Badge, ModalLayout, ModalHeader, ModalBody, ModalFooter, Accordion, AccordionToggle, TextInput, AccordionContent, Checkbox, Textarea } from '@strapi/design-system';
import { Plus } from '@strapi/icons';
import { getUsers } from '../../../../services/users';
import { getEmailingTraces, postEmailingTraces } from '../../../../services/traces';
import { sendEmail } from '../../../../services/email-sending';
import { template_1 } from '../../../../services/templates/custom';

type IsVisible = boolean;
type IsReady = boolean;
type IsOnSending = boolean;
type SendButton = string;
type Expanded = boolean;
type CurrentStep = number;
type NextStepActive = boolean;
type CurrentOption = any;
type CurrentOptionSending = any;
type Email = any;
type Entries = any;
type ComposedTemplate = any;

const Homepage: React.FC = () => {
  const template: any = template_1;
  const [emailingTraces, setEmailingTraces]: any = useState([])
  const [isVisible, setIsVisible] = useState<IsVisible>(false);
  const [isReady, setIsReady] = useState<IsReady>(false);
  const [isOnSending, setIsOnSending] = useState<IsOnSending>(false);
  const [sendButton, setSendButton] = useState<SendButton>('Envoyer maintenant')
  const [expanded, setExpanded] = useState<Expanded>(false)
  const [currentStep, setCurrentStep] = useState<CurrentStep>(1);
  const [nextStepActive, setNextStepActive] = useState<NextStepActive>(false)
  const [currentOption, setCurrentOption] = useState<CurrentOption>(null);
  const [currentOptionSending, setCurrentOptionSending] = useState<CurrentOptionSending>(null);
  const [currentOptionTemplate, setCurrentOptionTemplate] = useState<CurrentOptionSending>(null);

  const [emails, setEmails] = useState<Email[]>([]);
  const [emailsList, setEmailsList] = useState<Email[]>([]);

  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [composedTemplate, setComposedTemplate] = useState<ComposedTemplate>({})

  const [entries, setEntries] = useState<Entries[]>([]);
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  const entry = {
    email: 'o.nejdi@mayagroup.ma',
    statue: 'done',
    date: '01/13/2023 05:16:47 PM'
  };


  useEffect(() => {
    fetchEmails();
    fetchEmailingTraces();
  }, []);

  const optionHandler = (option: number) => {
    setCurrentOption(option)
    setNextStepActive(true)
  }

  const optionSendingHandler = (option: number) => {
    setCurrentOptionSending(option)
    if (option == 1) {
      setEmailsList(emails);
    }
    else {
      setEmailsList([]);
    }
  }

  const optionTemplateHandler = (option: number) => {
    setCurrentOptionTemplate(option)
    if (option == 1) {
      setIsReady(true);
    }
    else {
      setIsReady(false);
    }
  }

  const customTemplateHandler = () => {
    setIsReady(true);
  }

  const stepHandler = (step: number) => {
    setCurrentStep(step)
  }

  const fetchEmails = async () => {
    getUsers()
      .then((res: any) => {
        const filtred_emails = res.map((item: any) => item.email)
        setEmails(filtred_emails)
      })
      .catch(e => console.log(e))
  };

  const fetchEmailingTraces = async () => {
    getEmailingTraces()
      .then((res: any) => {
        console.log(res)
        setEmailingTraces(res)
      })
      .catch(e => console.log(e))
  };

  const handleSendEmailCampaign = () => {
    // Logic to send a new email campaign goes here
    // You can use the Strapi API to create and send emails
    // Make sure to handle any necessary form inputs and validation
    setIsOnSending(true)
    
    if (currentOptionTemplate == 1) {
      for (let i = 0; i < emailsList.length; i++) {
        sendEmail(emailsList[i], template.template.subject, template.template.html)
          .then(res => {
            
            postEmailingTraces(emailsList[i], true)
              .then(response => console.log(response))
              .catch(error => console.error(error))
          })
          .catch(e => {
            postEmailingTraces(emailsList[i], false)
              .then(response => console.log(response))
              .catch(error => console.error(error))
          })
          if(i+1 >= emailsList.length){
            setSendButton('Campagne envoyée')
            setTimeout(function(){
              window.location.reload()
            }, 2000)
          }
      }
      
      
    }
    else {
      for (let i = 0; i < emailsList.length; i++) {
        sendEmail(emailsList[i], subject, content)
          .then(res => {
            postEmailingTraces(emailsList[i], true)
              .then(response => console.log(response))
              .catch(error => console.error(error))
          })
          .catch(e => {
            postEmailingTraces(emailsList[i], false)
              .then(response => console.log(response))
              .catch(error => console.error(error))
          })
          if(i+1 >= emailsList.length){
            setSendButton('Campagne envoyée')
            setTimeout(function(){
              window.location.reload()
            }, 2000)
          }
      }
    }
  };




  return (
    <>
      <Box>
        <Box background="neutral100">
          <BaseHeaderLayout
            primaryAction={<Button onClick={() => setIsVisible(prev => !prev)} startIcon={<Plus />}>Nouvelle campagne</Button>}
            title="Bienvenue dans le plugin Emailing"
            subtitle="Un plugin qui fournit un e-mail de bout en bout, une fonctionnalité de notifications."
            as="h1"
          />
        </Box>
        <Box padding={8} background="neutral100">
          <Table colCount={COL_COUNT} rowCount={ROW_COUNT}>
            <Thead>
              <Tr>
                <Th>
                  <BaseCheckbox aria-label="Select all entries" />
                </Th>
                <Th>
                  <Typography variant="sigma">ID</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Email</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Statue</Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">Envoyé à</Typography>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {emailingTraces.map(entry => <Tr key={entry.id}>
                <Td>
                  <BaseCheckbox aria-label={`Select ${entry.id}`} />
                </Td>
                <Td>
                  <Typography textColor="neutral800">{entry.id}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{entry.attributes.email}</Typography>
                </Td>
                <Td>
                  <Box borderColor="red">
                    <Badge size="S" variant="success">{entry.attributes.sent ? "Envoyé" : "Erreur"}</Badge>
                  </Box>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{entry.attributes.createdAt}</Typography>
                </Td>
              </Tr>)}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isVisible && <ModalLayout onClose={() => setIsVisible(prev => !prev)} labelledBy="title">
        <ModalHeader>
          <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title"> Créer une nouvelle campagne </Typography>
        </ModalHeader>
        <ModalBody>
          <Box display={currentStep !== 1 && "none"}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 20, }}>
              <Typography as="h1">Vous pouvez envoyer des e-mails et des notifications à vos utilisateurs</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
              <Button variant={currentOption == 1 ? 'primary' : 'secondary'} size="L" onClick={() => optionHandler(1)} >Démarrer une nouvelle campagne</Button>
            </div>
          </Box>
          <Box display={currentStep !== 2 && "none"}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 20, }}>
              <h1>Choisissez ce que vous voulez envoyer pour cela</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
              <Button variant={currentOptionSending == 1 ? 'primary' : 'secondary'} size="L" onClick={() => optionSendingHandler(1)} >Tous les utilisateurs</Button>
              <Button variant={currentOptionSending == 2 ? 'primary' : 'secondary'} size="L" onClick={() => optionSendingHandler(2)} >Utilisateurs spécifiques</Button>
            </div>
            <Box padding={8} background="neutral0">
              <Accordion expanded={expanded} onToggle={() => setExpanded(s => !s)} id="acc-4" variant="secondary">
                <AccordionToggle togglePosition="left" title="E-mails de tous les utilisateurs" />
                <AccordionContent>
                  <Box padding={3}>
                    {
                      emails.map((item: any) => <Typography><Checkbox onChange={() => setEmailsList([...emailsList, item])} indeterminate={emailsList.indexOf(item) == -1 ? false : true} disabled={currentOptionSending == 1 ? true : false}>{item}</Checkbox></Typography>)
                    }
                  </Box>
                </AccordionContent>
              </Accordion>
            </Box>
          </Box>
          <Box display={currentStep !== 3 && "none"}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 20, }}>
              <h1>Choisissez {currentOption == 1 ? "l'e-mail" : "notification"} qui sera envoyé</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
              <Button variant={currentOptionTemplate == 1 ? 'primary' : 'secondary'} size="L" onClick={() => optionTemplateHandler(1)} >Modèle par défaut</Button>
              <Button variant={currentOptionTemplate == 2 ? 'primary' : 'secondary'} size="L" onClick={() => optionTemplateHandler(2)} >Composer nouveau</Button>
            </div>
            <br></br>
            <Box background="neutral0">
              <Accordion expanded={expanded} onToggle={() => setExpanded(s => !s)} id="acc-4" variant="secondary">
                <AccordionToggle togglePosition="left" title="Liste des emails des destinataires" />
                <AccordionContent>
                  <Box padding={3}>
                    {
                      emailsList.map((item: any) => <Typography><Checkbox indeterminate={true} disabled={true}>{item}</Checkbox></Typography>)
                    }
                  </Box>
                </AccordionContent>
              </Accordion>
            </Box>
            <br></br>
            <Box padding={8} background="neutral100">
              <Box display={currentOptionTemplate == 1 ? '' : 'none'}>
                <img src={template.screenshot} style={{ width: 650, height: 450, objectFit: 'cover', borderColor: "black", borderWidth: 3, borderRadius: 10, }} />
              </Box>
              <Box display={currentOptionTemplate == 2 ? '' : 'none'}>
                <TextInput placeholder="Sujet du courriel" label="Sujet du l'e-mail" name="subject" hint="Composez un sujet pour votre e-mail" onChange={(e: any) => setSubject(e.target.value)} value={subject} size="M" />
                <br />
                <br />
                <Textarea placeholder="Composez un contenu personnalisé pour votre email" label="Contenu de l'e-mail" name="email" hint="Vous pouvez mettre des balises html dans votre contenu" onChange={(e: any) => setContent(e.target.value)} value={content}>
                </Textarea>
                <br />
                <br />
                <Button size="s" onClick={() => customTemplateHandler()} >Sauvegarder</Button>
              </Box>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter startActions={<Button onClick={() => setIsVisible(prev => !prev)} variant="tertiary">
          Cancel
        </Button>} endActions={<>
          <Button disabled={currentStep == 1 ? true : false} variant="secondary" onClick={() => stepHandler(currentStep - 1)}>Étape précédente</Button>
          <Button disabled={!nextStepActive} variant="secondary" onClick={() => stepHandler(currentStep + 1)}>L'étape suivante</Button>
          <Button loading={isOnSending} disabled={!isReady} onClick={() => handleSendEmailCampaign()}>{sendButton}</Button>
        </>} />
      </ModalLayout>}
    </>
  );
};

export default Homepage;
