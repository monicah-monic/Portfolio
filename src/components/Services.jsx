import Card from 'react-bootstrap/Card';
import './styles/Services.css'

function Services() {
  return (
    <>
      {/* <img src="/Aboutme.png" alt="" className='serviceImage' /> */}
      <div id='services'>
        <img src="/Aboutme.png" alt="" className='serviceImage' />
        <h2>What I Do</h2>
        <div id='myServices'>
          <Card 
          // style={{ width: '18rem' }} 
          className='dev'>
            <Card.Body>
            <svg xmlns="http://www.w3.org/2000/svg" width="44.28494" height="39.17435" viewBox="0 0 44.28494 39.17435" className='codeIcon'>
              <path d="M11.45669,8.60326C7.70942,12.63784,3.96215,16.67243,.21487,20.70701c-.41161,.44317-.19384,1.04747,.33095,1.25354,4.90866,1.92752,9.34686,4.87045,13.06078,8.61054,.68115,.68595,1.7419-.37462,1.06066-1.06066-3.9047-3.93223-8.567-6.97178-13.72268-8.9963l.33095,1.25354c3.74727-4.03459,7.49455-8.06917,11.24182-12.10376,.6563-.70662-.40201-1.76981-1.06066-1.06066h0Z" fill="grey" origin="undraw"/>
              <path d="M31.76759,9.66392c3.74727,4.03459,7.49455,8.06917,11.24182,12.10376l.33095-1.25354c-5.15569,2.02452-9.81796,5.06406-13.72268,8.9963-.68095,.68575,.37922,1.74691,1.06066,1.06066,3.71391-3.74009,8.15211-6.68302,13.06078-8.61054,.52479-.20607,.74256-.81037,.33095-1.25354-3.74727-4.03459-7.49455-8.06917-11.24182-12.10376-.65836-.70884-1.71724,.35374-1.06066,1.06066h0Z" fill="grey"/>
              <path d="M16.26421,38.67073C21.17972,26.08128,26.09523,13.49183,31.01074,.90239c.35126-.89962-1.09862-1.28953-1.44642-.39876-4.91551,12.58945-9.83102,25.17889-14.74653,37.76834-.35126,.89962,1.09862,1.28953,1.44642,.39876h0Z" fill="grey"/>
            </svg>
              <Card.Title>Front-End Developer</Card.Title>
                <Card.Text>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                  </ul>
                </Card.Text>
            </Card.Body>
          </Card>
          {/* <img src="/Dots.png" alt="" /> */}
          <Card 
          // style={{ width: '18rem' }} 
          className='design'>
            <Card.Body>
              <svg xmlns="http://www.w3.org/2000/svg" width="40.32232" height="46.88469" viewBox="0 0 40.32232 46.88469" className='designIcon'>
                <path d="M28.5409,12.34174c-4.8843,.65204-9.82763,1.29502-14.76422,.95209-2.50715-.17417-4.99437-.62805-7.36719-1.46724-1.88085-.6652-4.26866-1.83345-4.832-3.94206-.58504-2.18983,1.58035-3.93895,3.59997-4.01289,2.1922-.08026,3.95796,1.65579,4.88802,3.48667,1.11684,2.19858,1.11854,4.77681,.97544,7.18068-.16372,2.75024-.43358,5.49708-.65687,8.24305-.4945,6.08124-.98901,12.16248-1.48351,18.24372l.37146-.6476c-1.62149,.84509-3.80421,.45586-4.8714-1.09746-1.13153-1.64697-.65028-4.05644,.97657-5.17819,1.56663-1.08023,3.66099-1.06474,5.4848-1.00394,2.22928,.07431,4.45789,.20136,6.68607,.3037,4.43089,.20351,9.07149,.04707,13.44725,.82054,3.43954,.60799,8.0015,2.8191,7.83543,6.96508-.06531,1.63028-.94042,3.38086-2.53078,3.99667-1.77163,.68599-3.68986-.3482-4.84137-1.67956-2.7533-3.18333-1.91553-8.61733-1.90379-12.4938,.01399-4.61594,.02797-9.23189,.04196-13.84783,.00724-2.3904,.01449-4.7808,.02173-7.1712,.00572-1.88783-.13096-3.88991,.44123-5.71567,1.45906-4.6556,7.76479-2.75272,7.51457,1.75048-.24865,4.47502-5.4458,6.78908-9.14863,4.59347-.83225-.49348-1.58765,.80272-.75708,1.29521,2.73902,1.62411,6.30554,1.35091,8.78628-.64828,2.45915-1.9818,3.48568-5.82593,1.79657-8.61862-1.41064-2.33228-4.78554-3.42242-7.21104-2.03676-3.20999,1.83383-2.91235,6.22328-2.92191,9.38018-.01474,4.86323-.02947,9.72645-.04421,14.58968-.01387,4.57879-.34493,9.28737,.06853,13.85063,.31163,3.43943,1.77394,7.03577,5.32547,8.19662,3.02974,.99029,5.89289-1.01528,6.65405-3.97468,.83228-3.2359-1.03652-6.25246-3.68492-7.99721-3.44644-2.27048-7.80781-2.24596-11.77747-2.42829-4.65909-.214-9.32215-.50602-13.98427-.63673-3.18366-.08926-7.0721,.48662-8.15218,4.01375-.9436,3.08145,1.05951,6.24689,4.25179,6.66748,1.02788,.13543,3.22997,.06197,3.61189-1.14797,.30406-.96329,.19193-2.29519,.27401-3.30467,.10024-1.23268,.20047-2.46537,.30071-3.69805,.39427-4.84856,.78853-9.69711,1.1828-14.54567,.33486-4.118,1.18832-8.75524-.62772-12.65303-1.31683-2.82633-4.24218-5.18644-7.50557-4.39083C1.14988,3.23082-.88841,6.1203,.38939,8.98862c1.44661,3.24727,5.64742,4.50552,8.8138,5.1804,4.22139,.89974,8.57727,.8322,12.85431,.44097,2.1676-.19828,4.32624-.48027,6.48341-.76824,.94282-.12586,.95532-1.62753,0-1.5h0Z" fill="grey" origin="undraw"/>
              </svg>
              <Card.Title>Backend Developer</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Python</li>
                  </ul>
                </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Services