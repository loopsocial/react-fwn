import React from 'react'
import css from './article.css'

export default ({ children, storyblockMobile, storyblockDesktop, row }) => (
  <>
    <div class="container">
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900"
        rel="stylesheet"
      />
      <link href={css} rel="stylesheet" />

      <header class="article-header py-3 container">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4">
            <a class="article-header-logo text-dark" href="#">
              Blog Title
            </a>
          </div>
          <div class="col-8 d-flex justify-content-end align-items-center">
            <a class="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </a>
            <div className="burger" href="#">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </header>
    </div>

    {children}

    <div className="container with-padding-top">

      <main role="main" class="container">
        <div class="row">
          <div class="col-md-8 article-main">
            <div class="article-post">
              {storyblockMobile}
              <h2 class="article-post-title">Sample article post</h2>
              <p class="article-post-meta">
                January 1, 2014 by <a href="#">Mark</a>
              </p>

              <p>
                This article post shows a few different types of content that’s
                supported and styled with Bootstrap. Basic typography, images, and
                code are all supported.
              </p>
              <hr />
              <p>
                Cum sociis natoque penatibus et magnis{' '}
                <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
                consectetur purus sit amet fermentum.
              </p>
              <blockquote>
                <p>
                  Curabitur blandit tempus porttitor.{' '}
                  <strong>Nullam quis risus eget urna mollis</strong> ornare vel
                  eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </blockquote>
              <p>
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
              <h2>Heading</h2>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
              <h3>Sub-heading</h3>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <pre>
                <code>Example code block</code>
              </pre>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
                malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa.
              </p>
              <h3>Sub-heading</h3>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
                consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                ut fermentum massa justo sit amet risus.
              </p>
              <ul>
                <li>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur
                  et.
                </li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
                elit libero, a pharetra augue.
              </p>
              <ol>
                <li>Vestibulum id ligula porta felis euismod semper.</li>
                <li>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </li>
                <li>
                  Maecenas sed diam eget risus varius blandit sit amet non magna.
                </li>
              </ol>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Sed posuere
                consectetur est at lobortis.
              </p>
            </div>

            {row}

            <div class="article-post">
              <h2 class="article-post-title">Another article post</h2>
              <p class="article-post-meta">
                December 23, 2013 by <a href="#">Jacob</a>
              </p>

              <p>
                Cum sociis natoque penatibus et magnis{' '}
                <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
                consectetur purus sit amet fermentum.
              </p>
              <blockquote>
                <p>
                  Curabitur blandit tempus porttitor.{' '}
                  <strong>Nullam quis risus eget urna mollis</strong> ornare vel
                  eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </blockquote>
              <p>
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </div>

            <div class="article-post">
              <h2 class="article-post-title">New feature</h2>
              <p class="article-post-meta">
                December 14, 2013 by <a href="#">Chris</a>
              </p>

              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
                consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                ut fermentum massa justo sit amet risus.
              </p>
              <ul>
                <li>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur
                  et.
                </li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              <p>
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
                elit libero, a pharetra augue.
              </p>
            </div>

            <nav class="article-pagination">
              <a class="btn btn-outline-primary" href="#">
                Older
              </a>
              <a
                class="btn btn-outline-secondary disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Newer
              </a>
            </nav>
          </div>
        </div>
      </main>

      <footer class="article-footer">
        <p>
          article template built for{' '}
          <a href="https://getbootstrap.com/">Bootstrap</a> by{' '}
          <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    </div>
    <div
      className="container"
      style={{ position: 'fixed', left: 0, right: 0, top: 84 }}
    >
      <main role="main" className="container">
        <div className="row">
          <aside className="col-md-4 offset-md-8 article-sidebar">
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="font-italic">About</h4>
              <p className="mb-0">
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum.
              </p>
            </div>
            {storyblockDesktop}
          </aside>
        </div>
      </main>
    </div>
  </>
)
