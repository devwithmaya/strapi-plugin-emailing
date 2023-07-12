// @ts-ignore
import React, { useState, useEffect } from 'react';
import { Box, Typography, BaseHeaderLayout, Button, Table, Thead, Tbody, Tr, Th, Td, BaseCheckbox, Badge, ModalLayout, ModalHeader, ModalBody, ModalFooter, Accordion, AccordionToggle, TextInput, AccordionContent, Checkbox, Textarea } from '@strapi/design-system';
import { Plus } from '@strapi/icons';
import { getUsers } from '../../../../services/users';
import { getEmailingTraces, postEmailingTraces } from '../../../../services/traces';
import { sendEmail } from '../../../../services/email-sending';
import { template_1 } from '../../../../services/templates/custom';

type IsVisible = boolean;
type IsReady = boolean;
type EmailingPlugin = number;
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

  const [compaignOption, setCompaignOption] = useState(null);
  const [nextStepActive, setNextStepActive] = useState<NextStepActive>(false)
  const [newsletterLink, setNewsletterLink] = useState('')

  const [isReady, setIsReady] = useState<IsReady>(false);
  const [isOnSending, setIsOnSending] = useState<IsOnSending>(false);
  const [sendButton, setSendButton] = useState<SendButton>('Envoyer maintenant')
  const [expanded, setExpanded] = useState<Expanded>(false)
  const [currentStep, setCurrentStep] = useState<CurrentStep>(1);
  const [currentOption, setCurrentOption] = useState<CurrentOption>(null);
  const [currentOptionSending, setCurrentOptionSending] = useState<CurrentOptionSending>(null);
  const [currentOptionTemplate, setCurrentOptionTemplate] = useState<CurrentOptionSending>(null);

  const [emails, setEmails] = useState<Email[]>([]);
  const [emailsList, setEmailsList] = useState<Email[]>([]);

  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [composedTemplate, setComposedTemplate] = useState<ComposedTemplate>({})

  const ROW_COUNT = 6;
  const COL_COUNT = 10;

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
      .catch(e => console.error(e))
  };

  const fetchEmailingTraces = async () => {
    getEmailingTraces()
      .then((res: any) => {
        setEmailingTraces(res)
      })
      .catch(e => console.error(e))
  };



  // new alghorithm
  const close = () =>{
    setIsVisible(prev => !prev)
    window.location.reload()
  }
  const emailingHandler = () =>{
    setCompaignOption("emailing")
    setNextStepActive(true)
  }


  const newsletterHandler = () =>{
    setCompaignOption("newsletter")
    setNextStepActive(true)
  }

  const compaignHandler = (compaignOption:string) =>{
    switch (compaignOption){
      case "emailing":
        emailingHandler();
        break;
      case "newsletter":
        newsletterHandler()
        break;
      default:
        break;
    }
  }
  const emailingSending = () =>{
    setIsOnSending(true)
    if (currentOptionTemplate == 1) {
      for (let i = 0; i < emailsList.length; i++) {
        sendEmail(emailsList[i], template.template.subject, template.template.html)
          .then(res => {
            postEmailingTraces(emailsList[i], true)
              .then(response => null)
              .catch(error => console.error(error))
          })
          .catch(e => {
            postEmailingTraces(emailsList[i], false)
              .then(response => null)
              .catch(error => console.error(error))
          })
        if(i+1 == emailsList.length){
          setSendButton('Campagne envoyée')
          setTimeout(function(){
            window.location.reload()
          }, 1000)
        }
      }
    }
    else {
      for (let i = 0; i < emailsList.length; i++) {
        sendEmail(emailsList[i], subject, content)
          .then(res => {
            postEmailingTraces(emailsList[i], true)
              .then(response => null)
              .catch(error => console.error(error))
          })
          .catch(e => {
            postEmailingTraces(emailsList[i], false)
              .then(response => null)
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
  }
  const newsletterSending = () =>{
    setIsOnSending(true)
    const newsletter_subject = "Test newsletter"
    const newsletter_html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <!-- Compiled with Bootstrap Email version: 1.3.1 --><meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style type="text/css">
      body,table,td{font-family:Helvetica,Arial,sans-serif !important}.ExternalClass{width:100%}.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{line-height:150%}a{text-decoration:none}*{color:inherit}a[x-apple-data-detectors],u+#body a,#MessageViewBody a{color:inherit;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit}img{-ms-interpolation-mode:bicubic}table:not([class^=s-]){font-family:Helvetica,Arial,sans-serif;mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0px;border-collapse:collapse}table:not([class^=s-]) td{border-spacing:0px;border-collapse:collapse}@media screen and (max-width: 600px){.w-full,.w-full>tbody>tr>td{width:100% !important}*[class*=s-lg-]>tbody>tr>td{font-size:0 !important;line-height:0 !important;height:0 !important}.s-3>tbody>tr>td{font-size:12px !important;line-height:12px !important;height:12px !important}.s-4>tbody>tr>td{font-size:16px !important;line-height:16px !important;height:16px !important}.s-5>tbody>tr>td{font-size:20px !important;line-height:20px !important;height:20px !important}.s-10>tbody>tr>td{font-size:40px !important;line-height:40px !important;height:40px !important}}
    </style>
  </head>
  <body class="bg-light" style="outline: 0; width: 100%; min-width: 100%; height: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-family: Helvetica, Arial, sans-serif; line-height: 24px; font-weight: normal; font-size: 16px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; color: #000000; margin: 0; padding: 0; border-width: 0;" bgcolor="#f7fafc">
    <table class="bg-light body" valign="top" role="presentation" border="0" cellpadding="0" cellspacing="0" style="outline: 0; width: 100%; min-width: 100%; height: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-family: Helvetica, Arial, sans-serif; line-height: 24px; font-weight: normal; font-size: 16px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; color: #000000; margin: 0; padding: 0; border-width: 0;" bgcolor="#f7fafc">
      <tbody>
        <tr>
          <td valign="top" style="line-height: 24px; font-size: 16px; margin: 0;" align="left" bgcolor="#f7fafc">
            <table class="container" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
              <tbody>
                <tr>
                  <td align="center" style="line-height: 24px; font-size: 16px; margin: 0; padding: 0 16px;">
                    <!--[if (gte mso 9)|(IE)]>
                      <table align="center" role="presentation">
                        <tbody>
                          <tr>
                            <td width="600">
                    <![endif]-->
                    <table align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; margin: 0 auto;">
                      <tbody>
                        <tr>
                          <td style="line-height: 24px; font-size: 16px; margin: 0;" align="left">
                            <table class="s-10 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                              <tbody>
                                <tr>
                                  <td style="line-height: 40px; font-size: 40px; width: 100%; height: 40px; margin: 0;" align="left" width="100%" height="40">
                                    &#160;
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="card" role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-radius: 6px; border-collapse: separate !important; width: 100%; overflow: hidden; border: 1px solid #e2e8f0;" bgcolor="#ffffff">
                              <tbody>
                                <tr>
                                  <td style="line-height: 24px; font-size: 16px; width: 100%; margin: 0;" align="left" bgcolor="#ffffff">
                                    <table class="card-body" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                                      <tbody>
                                        <tr>
                                          <td style="line-height: 24px; font-size: 16px; width: 100%; margin: 0; padding: 20px;" align="left">
                                            <img class="" width="200px" src="https://www.rabatinvest.ma/wp-content/uploads/2022/09/logo.jpg" style="height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; border-style: none; border-width: 0;">
                                            <table class="s-4 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td style="line-height: 16px; font-size: 16px; width: 100%; height: 16px; margin: 0;" align="left" width="100%" height="16">
                                                    &#160;
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table class="s-5 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td style="line-height: 20px; font-size: 20px; width: 100%; height: 20px; margin: 0;" align="left" width="100%" height="20">
                                                    &#160;
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table class="hr" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                                              <tbody>
                                                <tr>
                                                  <td style="line-height: 24px; font-size: 16px; border-top-width: 1px; border-top-color: #e2e8f0; border-top-style: solid; height: 1px; width: 100%; margin: 0;" align="left">
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table class="s-5 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td style="line-height: 20px; font-size: 20px; width: 100%; height: 20px; margin: 0;" align="left" width="100%" height="20">
                                                    &#160;
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <div class="space-y-3">
                                              <p class="text-gray-700" style="line-height: 24px; font-size: 16px; color: #4a5568; width: 100%; margin: 0;" align="left">
                                                Bonjour!
                                              </p>
                                              <table class="s-3 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                                <tbody>
                                                  <tr>
                                                    <td style="line-height: 12px; font-size: 12px; width: 100%; height: 12px; margin: 0;" align="left" width="100%" height="12">
                                                      &#160;
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <p class="text-gray-700" style="line-height: 24px; font-size: 16px; color: #4a5568; width: 100%; margin: 0;" align="left">
                                                J'esp&#232;re que vous allez bien.
                                              </p>
                                              <table class="s-3 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                                <tbody>
                                                  <tr>
                                                    <td style="line-height: 12px; font-size: 12px; width: 100%; height: 12px; margin: 0;" align="left" width="100%" height="12">
                                                      &#160;
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <p class="text-gray-700" style="line-height: 24px; font-size: 16px; color: #4a5568; width: 100%; margin: 0;" align="left">
                                                Nous sommes heureux de vous informer que la derni&#232;re version de notre newsletter est publi&#233;e sur notre site. Vous y trouverez les derni&#232;res actualit&#233;s de la r&#233;gion.
                                              </p>
                                              <table class="s-3 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                                <tbody>
                                                  <tr>
                                                    <td style="line-height: 12px; font-size: 12px; width: 100%; height: 12px; margin: 0;" align="left" width="100%" height="12">
                                                      &#160;
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <p class="text-gray-700" style="line-height: 24px; font-size: 16px; color: #4a5568; width: 100%; margin: 0;" align="left">Bonne lecture!</p>
                                            </div>
                                            <table class="s-5 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td style="line-height: 20px; font-size: 20px; width: 100%; height: 20px; margin: 0;" align="left" width="100%" height="20">
                                                    &#160;
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table class="hr" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                                              <tbody>
                                                <tr>
                                                  <td style="line-height: 24px; font-size: 16px; border-top-width: 1px; border-top-color: #e2e8f0; border-top-style: solid; height: 1px; width: 100%; margin: 0;" align="left">
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table class="s-5 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td style="line-height: 20px; font-size: 20px; width: 100%; height: 20px; margin: 0;" align="left" width="100%" height="20">
                                                    &#160;
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table class="btn btn-danger" role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-radius: 6px; border-collapse: separate !important;">
                                              <tbody>
                                                <tr>
                                                  <td style="line-height: 24px; font-size: 16px; border-radius: 6px; margin: 0;" align="center" bgcolor="#dc3545">
                                                    <a href="${newsletterLink}" target="_blank" style="color: #ffffff; font-size: 16px; font-family: Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 6px; line-height: 20px; display: block; font-weight: normal; white-space: nowrap; background-color: #dc3545; padding: 8px 12px; border: 1px solid #dc3545;">Acc&#233;dez &#224; la newsletter</a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="s-10 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                              <tbody>
                                <tr>
                                  <td style="line-height: 40px; font-size: 40px; width: 100%; height: 40px; margin: 0;" align="left" width="100%" height="40">
                                    &#160;
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!--[if (gte mso 9)|(IE)]>
                    </td>
                  </tr>
                </tbody>
              </table>
                    <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`
    for (let i = 0; i < emailsList.length; i++) {
      sendEmail(emailsList[i], newsletter_subject, newsletter_html)
        .then(res => {
          postEmailingTraces(emailsList[i], true)
            .then(response => null)
            .catch(error => console.error(error))
        })
        .catch(e => {
          postEmailingTraces(emailsList[i], false)
            .then(response => null)
            .catch(error => console.error(error))
        })
      if(i+1 == emailsList.length){
        setSendButton('Les newsletters ont été envoyées')
        setTimeout(function(){
          window.location.reload()
        }, 1000)
      }
    }
  }

  const handleSendEmailCampaign = () => {
    // Logic to send a new email campaign goes here
    // You can use the Strapi API to create and send emails
    // Make sure to handle any necessary form inputs and validation
    setIsOnSending(true)
    switch(compaignOption){
      case "emailing":
        emailingSending();
        break;
      case "newsletter":
        newsletterSending();
        break;
    }

    /*
    if (currentOptionTemplate == 1) {
      for (let i = 0; i < emailsList.length; i++) {
        sendEmail(emailsList[i], template.template.subject, template.template.html)
          .then(res => {

            postEmailingTraces(emailsList[i], true)
              .then(response => null)
              .catch(error => console.error(error))
          })
          .catch(e => {
            postEmailingTraces(emailsList[i], false)
              .then(response => null)
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
              .then(response => null)
              .catch(error => console.error(error))
          })
          .catch(e => {
            postEmailingTraces(emailsList[i], false)
              .then(response => null)
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
     */
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
      {isVisible && <ModalLayout onClose={() => close()} labelledBy="title">
        <ModalHeader>
          <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title"> Créer une nouvelle campagne </Typography>
        </ModalHeader>
        <ModalBody>
          <Box display={currentStep !== 1 && "none"}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 20, }}>
              <Typography as="h1">Vous pouvez envoyer des e-mails et des notifications à vos utilisateurs</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
              <Button variant={compaignOption == "emailing" ? 'primary' : 'secondary'} size="L" onClick={() => compaignHandler("emailing")} >Campagne d'emailing</Button>
              <Button variant={compaignOption == "newsletter" ? 'primary' : 'secondary'} size="L" onClick={() => compaignHandler("newsletter")} >Campagne de newsletter</Button>
            </div>
          </Box>
          <Box display={currentStep !== 2 && "none"}>
            <Box display={compaignOption !== "emailing" && "none"}>
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
            <Box display={compaignOption !== "newsletter" && "none"}>
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
          </Box>
          <Box display={currentStep !== 3 && "none"}>
            <Box display={compaignOption !== "emailing" && "none"}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 20, }}>
                <h1>Choisissez le modèle que vous souhaitez envoyer</h1>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                <Button variant={currentOptionTemplate == 1 ? 'primary' : 'secondary'} size="L" onClick={() => optionTemplateHandler(1)} >Modèle par défaut</Button>
                <Button variant={currentOptionTemplate == 2 ? 'primary' : 'secondary'} size="L" onClick={() => optionTemplateHandler(2)} >Composer nouveau</Button>
              </div>
              <br/>
              <Box padding={8} background="neutral100">
                <Box display={currentOptionTemplate == 1 || currentOptionTemplate == 2 ? "none" : null}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                    <p style={{opacity: 0.2, fontSize: 13}}>Veuillez choisir un modèle!</p>
                  </div>
                </Box>
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
            <Box display={compaignOption !== "newsletter" && "none"}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 20, }}>
                <h1>Choisissez le modèle que vous souhaitez envoyer</h1>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                <Button variant={currentOptionTemplate == 1 ? 'primary' : 'secondary'} size="L" onClick={() => optionTemplateHandler(1)} >Modèle par défaut</Button>
              </div>
              <br/>
              <Box padding={8} background="neutral100">
                <Box display={currentOptionTemplate == 1 || currentOptionTemplate == 2 ? "none" : null}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                    <p style={{opacity: 0.2, fontSize: 13}}>Veuillez confirmer le modèle!</p>
                  </div>
                </Box>
                <Box display={currentOptionTemplate == 1 ? '' : 'none'}>
                  <img src="https://i.postimg.cc/fy72WRhr/Screenshot-2023-07-12-at-15-14-26.png" style={{ width: 650, height: 420, objectFit: 'cover', borderColor: "white", borderWidth: 10, borderRadius: 10, }} />
                  <br />
                  <br />
                  <TextInput placeholder="https://" label="Le lien de la newsletter" name="newsletterLink" hint={`Vous pouvez mais lien pour le button "Accédez à la newsletter"`} onChange={(e: any) => setNewsletterLink(e.target.value)} value={newsletterLink} size="M" />
                  <br />
                  <br />
                  <Button size="s" onClick={() => customTemplateHandler()} >Sauvegarder</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter startActions={<Button onClick={() => close()} variant="tertiary">
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
