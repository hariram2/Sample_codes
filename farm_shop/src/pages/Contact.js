import { useEffect } from 'react';
import '../App.css';

function Contact() {

  useEffect(() => {

    const tabs = document.querySelector(".tabs");
    const btns = document.querySelectorAll(".button");
    const articles = document.querySelectorAll(".content");
    tabs.addEventListener("click", function (e) {
      const id = e.target.dataset.id;
      if (id) {
        // remove selected from other buttons
        btns.forEach(function (btn) {
          btn.classList.remove("live");
        });
        e.target.classList.add("live");
        // hide other articles
        articles.forEach(function (article) {
          article.classList.remove("live");
        });
        const element = document.getElementById(id);
        element.classList.add("live");
      }
    });

  },[])

  return (


    <div className='stst__nav'>
      <h2>Status Codes </h2>
      <p className='stat__par'>
          Status codes are issued by a server in response to a client's request made to the server. 
          All HTTP response status codes are separated into five classes or categories. The first digit of the status code defines the class of response, 
          while the last two digits do not have any classifying or categorization role. There are five classes defined by the standard.
      </p>
      <div className="section-center">
        <div className="tabs">
          <div className="btn-container">
            <button className="button live" data-id="step1">1XX</button>
            <button className="button" data-id="step2">2XX</button>
            <button className="button" data-id="step3">3XX</button>
            <button className="button" data-id="step4">4XX</button>
            <button className="button" data-id="step5">5XX</button>
          </div>
          <div className="tabs-content">
            
            <div className="content live" id="step1">
              <h4>Informational Response</h4>
              <p>The request was received, continuing process</p>

            </div>
            
            
            <div className="content" id="step2">
                <h4>Response - Success</h4>
                <p>The request was successfully received, understood, and accepted</p>
            </div>
            
            
            <div className="content" id="step3">
                  <h4>Redirection</h4>
                  <p>Further action needs to be taken in order to complete the request</p>
            </div>

            <div className="content" id="step4">
                  <h4>Client Error</h4>
                  <p>The request contains bad syntax or cannot be fulfilled</p>
            </div>

            <div className="content" id="step5">
                  <h4>Server Error</h4>
                  <p>The server failed to fulfil an apparently valid request</p>
            </div>
            
          </div>
        </div>
      </div>


    <div className='s__prefix'>
      <div className='container'>
        <h4>1xx: Information</h4>
       <div className='row'>
        <div className='col-md-6'>
          <div className='status_pre'>
            <p>
              <span>100 (Continue):</span>
              Only a part of the request has been received by the server, but as long as it has not been rejected, 
              the client should continue with the request.
            </p>
          </div>
        </div>
        <div className='col-md-6'>
            <div className='status_pre'>
            <p>
              <span>101 (Switching Protocols):</span>
              The server switches protocol.
            </p>
            </div>
        </div>
       </div>

      </div>
    </div>


    <div className='s__prefix'>
        <div className='container'>
            <h4>2xx: Successful</h4>
        <div className='row'>

          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>200 (OK):</span>
                    The request is OK.
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>201 (Created):</span>
                  The request is complete, and a new resource is created .
                </p>
              </div>
          </div>

          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>202 (Accepted):</span>
                    The request is accepted for processing, but the processing is not complete.
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>203 (Non-authoritative Information):</span>
                  The information in the entity header is from a local or third-party copy, not from the original server.
                </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>204 (No Content):</span>
                    A status code and a header are given in the response, but there is no entity-body in the reply.
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>205 (Reset Content):</span>
                  The browser should clear the form used for this transaction for additional input.
                </p>
              </div>
          </div>


        </div>

    </div>


    </div>

    <div className='s__prefix'>
        <div className='container'>
            <h4>3xx: Redirection</h4>
        <div className='row'>

          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>300 (Multiple Choices):</span>
                    A link list. The user can select a link and go to that location. Maximum five addresses  .
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>301 (Moved Permanently):</span>
                  The requested page has moved to a new url .
                </p>
              </div>
          </div>

          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>302 (Found):</span>
                    The requested page has moved temporarily to a new url .
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>303 (See Other):</span>
                  The requested page can be found under a different url 
                </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>304 (Not Modified):</span>
                    This is the response code to an If-Modified-Since or If-None-Match header, where the URL has not been modified since the specified date.
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>305 (Use Proxy):</span>
                  The requested URL must be accessed through the proxy mentioned in the Location header.
                </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>306 (Unused):</span>
                    This code was used in a previous version. It is no longer used, but the code is reserved.
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>307 (Temporary Redirect):</span>
                  The requested page has moved temporarily to a new url.
                </p>
              </div>
          </div>


        </div>

    </div>


    </div>

    <div className='s__prefix'>
        <div className='container'>
            <h4>4xx: Client Error</h4>
        <div className='row'>

          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>400 (Bad Request):</span>
                    The server did not understand the request.
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>401 (Unauthorized):</span>
                  The requested page needs a username and a password.
                </p>
              </div>
          </div>

          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>402 (Payment Required):</span>
                    You can not use this code yet.
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>403 (Forbidden):</span>
                  Access is forbidden to the requested page.
                </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>404 (Not Found):</span>
                    The server can not find the requested page.
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>405 (Method Not Allowed):</span>
                  The method specified in the request is not allowed
                </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>406 (Not Acceptable):</span>
                    The server can only generate a response that is not accepted by the client.
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>407 (Proxy Authentication Required):</span>
                  You must authenticate with a proxy server before this request can be served.
                </p>
              </div>
          </div>


        </div>

    </div>


    </div>

    <div className='s__prefix'>
        <div className='container'>
            <h4>5xx: Server Error</h4>
        <div className='row'>

          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>500 (Internal Server Error):</span>
                    The request was not completed. The server met an unexpected condition.
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>501 (Not Implemented):</span>
                  The request was not completed. The server did not support the functionality required.
                </p>
              </div>
          </div>

          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>502 (Bad Gateway):</span>
                    The request was not completed. The server received an invalid response from the upstream server.
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>503 (Service Unavailable):</span>
                  The request was not completed. The server is temporarily overloading or down.
                </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                  <p>
                    <span>504 (Gateway Timeout):</span>
                    The gateway has timed out.
                  </p>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='status_pre'>
                <p>
                  <span>505 (HTTP Version Not Supported):</span>
                  The server does not support the "http protocol" version.
                </p>
              </div>
          </div>
        </div>
    </div>


    </div>

    </div>

    
  
  );
}

export default Contact;