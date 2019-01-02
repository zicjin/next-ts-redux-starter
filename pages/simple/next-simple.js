import React from 'react'
import classNames from 'classnames/bind'
import Head from 'next/head'
import styles from './example.css'
// import PropTypes from 'prop-types';

const cx = classNames.bind(styles)

class NextSimple extends React.Component {
  constructor(props) { // as componentWillMount
    super(props)
    // Operations usually carried out in componentWillMount go here
  }

    state = {
      loopsRemaining: this.props.maxLoops,
    }

    static defaultProps = {
      autoPlay: false,
      maxLoops: 10,
    }

    // static propTypes = {
    //     autoPlay: PropTypes.bool.isRequired,
    //     maxLoops: PropTypes.number.isRequired,
    //     posterFrameSrc: PropTypes.string.isRequired,
    //     videoSrc: PropTypes.string.isRequired,
    // }

    // 访问初始页面的时候只会在服务器端执行。链接导航到这个页面的时候，此方法就会在客户端执行。
    // getInitialProps 不能在子组件上使用，只能应用于页面组件。
    static async getInitialProps({ req }) {
      if (req) { // server side
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        return { userAgent }
      }
      return {}
    }

    render() {
      return (
        <>
          <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>

          <div className={cx({
            example: true,
            inProgress: false,
            error: false,
            // disabled: this.props.valid,
          })}>Welcome to next.js!</div>
        </>
      )
    }
}

export default NextSimple
