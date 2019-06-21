import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class Retweet extends React.Component {


    state = {
        is_retweet: false,
        isLoading: false,
        traffle_ticket: 12345,
    }


    async retweet() {

        this.setState({ isLoading: true})
    
        var formData = new FormData()

        formData.append('traffle_id', 21)
        formData.append('auth_code', 'eindRdhoa3444')
    
        try {
          const res = await fetch('https://demo1587820.mockable.io/retweet', {
           body : formData,
           method: 'POST',
          })
          const traffle_ticket = await res.json();
            this.setState({
              traffle_ticket
            });
        } catch (e) {
          console.log(e);
        }


        //https://twitter.com/SimShagaya/status/1140147987408195585

    try {
      const res = await fetch('https://api.twitter.com/1.1/statuses/retweet/1140147987408195585.json/', {
       method: 'POST',
       headers:{
        'authorization': 'OAuth oauth_consumer_key="v5YdSajZcBWmmmiJeL0Gd9OoB", oauth_nonce="AUTO_GENERATED_NONCE", oauth_signature="AUTO_GENERATED_SIGNATURE", oauth_signature_method="HMAC-SHA1", oauth_timestamp="AUTO_GENERATED_TIMESTAMP", oauth_token="743877620706779136-nCo3eMZAllncWRu2X07zFAByofgyxKH", oauth_version="1.0"' ,
        'content-type': 'application/json'
       }
      })
      const rt = await res.json();
        console.log('control reached here ' + rt)
    } catch (e) {
      console.log('control reached here ' + e);
    }
   
      
        this.setState({ isLoading: false, is_retweet: true})

    }

    


       render() {
         return (
           <section>

                  {this.state.isLoading ? (
                    <div>
                      
                      <p>Sending retweet... <Spinner color="#0f0c29" size={20}/></p>
                    </div>
                    
                  ) : (
                  <section>
                    {this.state.is_retweet ? (
                      <div className="ticket">
                           <p>Traffle ticket: {this.state.traffle_ticket}</p>
                       </div>
                    ) : (
                   <div className="tweet"  onClick={() => this.retweet()}>
                    <Button><img src= { require ('./houses/images/t-logo.png') } height="30" width="30" alt="twitter-logo" responsive/>Retweet to contest</Button>
                  </div>
                )}
                 </section>

                )}

             
           </section>
         )
       }
  }
