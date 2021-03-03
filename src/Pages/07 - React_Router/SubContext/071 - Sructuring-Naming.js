import React from 'react';
import { Frame, Container, Header2 } from './../../../App/Components';
import ContainerContext from './../Components/ContainerContext/ContainerContext';

function StructuringNaming() {
  return (
    <Frame>
      <Container id="React_Router">
        <Header2 innerValue="Router - Structuring & Naming" />
        <hr />
        <ContainerContext className="structuring-naming">
          <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
            <div class="accordion" id="accordionRoot" style={{ textAlign: 'start', textIndent: 12 }}>
              <div class="card">
                <div class="card-header" id="headingRoot">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#Root" aria-expanded="true" aria-controls="Root">
                      Root Structure
                  </button>
                  </h2>
                </div>
                <div id="Root" class="collapse" aria-labelledby="headingRoot" data-parent="#accordionRoot">
                  <div class="card-body">
                    Root disini dimulai dari folder src
                    <br /> <br />
                    <div class="accordion" id="accordionComponents" style={{ textAlign: 'start', textIndent: 12 }}>
                      <div class="card">
                        <div class="card-header" id="headingComponents">
                          <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#Components" aria-expanded="true" aria-controls="Components">
                              Components
                          </button>
                          </h2>
                        </div>
                        <div id="Components" class="collapse" aria-labelledby="headingComponents" data-parent="#accordionComponents">
                          <div class="card-body">
                            Berisi daftar folder komponen-komponen kecil ui yang dibuat secara terpisah
                            <br /><br />
                            <div class="accordion" id="accordionComponentA" style={{ textAlign: 'start', textIndent: 12 }}>
                              <div class="card">
                                <div class="card-header" id="headingComponentA">
                                  <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#ComponentA" aria-expanded="true" aria-controls="ComponentA">
                                      Component A
                                  </button>
                                  </h2>
                                </div>
                                <div id="ComponentA" class="collapse" aria-labelledby="headingComponentA" data-parent="#accordionComponentA">
                                  <div class="card-body">
                                    Merupakan folder yang berisikan jsx dan css dari suatu komponen
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br />
                            <div class="accordion" id="accordionComponentB" style={{ textAlign: 'start', textIndent: 12 }}>
                              <div class="card">
                                <div class="card-header" id="headingComponentB">
                                  <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#ComponentB" aria-expanded="true" aria-controls="ComponentB">
                                      Component B
                                  </button>
                                  </h2>
                                </div>
                                <div id="ComponentB" class="collapse" aria-labelledby="headingComponentB" data-parent="#accordionComponentB">
                                  <div class="card-body">
                                    Merupakan folder yang berisikan jsx dan css dari suatu komponen
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="accordion" id="accordionContainers" style={{ textAlign: 'start', textIndent: 12 }}>
                      <div class="card">
                        <div class="card-header" id="headingContainers">
                          <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#Containers" aria-expanded="true" aria-controls="Containers">
                              Containers
                          </button>
                          </h2>
                        </div>
                        <div id="Containers" class="collapse" aria-labelledby="headingContainers" data-parent="#accordionContainers">
                          <div class="card-body">
                            Berisi daftar folder untuk semua container yang dibuat secara terpisah
                            <br /><br />
                            <div class="accordion" id="accordionContainerA" style={{ textAlign: 'start', textIndent: 12 }}>
                              <div class="card">
                                <div class="card-header" id="headingContainerA">
                                  <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#ContainerA" aria-expanded="true" aria-controls="ContainerA">
                                      Container A
                                  </button>
                                  </h2>
                                </div>
                                <div id="ContainerA" class="collapse" aria-labelledby="headingContainerA" data-parent="#accordionContainerA">
                                  <div class="card-body">
                                    Merupakan folder yang berisikan jsx dan css dari suatu komponen, dan juga terdapat beberapa komponen children yang berkaitan
                                    <br /><br />
                                    <div class="accordion" id="accordionComponentChildBA" style={{ textAlign: 'start', textIndent: 12 }}>
                                      <div class="card">
                                        <div class="card-header" id="headingComponentChildAA">
                                          <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#ComponentChildAA" aria-expanded="true" aria-controls="ComponentChildAA">
                                              ComponentChild A.A
                                            </button>
                                          </h2>
                                        </div>
                                        <div id="ComponentChildAA" class="collapse" aria-labelledby="headingComponentChildAA" data-parent="#accordionComponentChildBA">
                                          <div class="card-body">
                                            Merupakan komponen yang dipastikan berada pada Container A, didalam sini juga terdapat jsx dan css dari suatu komponen
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <br />
                                    <div class="accordion" id="accordionComponentChildBB" style={{ textAlign: 'start', textIndent: 12 }}>
                                      <div class="card">
                                        <div class="card-header" id="headingComponentChildAB">
                                          <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#ComponentChildAB" aria-expanded="true" aria-controls="ComponentChildAB">
                                              ComponentChild A.B
                                            </button>
                                          </h2>
                                        </div>
                                        <div id="ComponentChildAB" class="collapse" aria-labelledby="headingComponentChildAB" data-parent="#accordionComponentChildBB">
                                          <div class="card-body">
                                            Merupakan komponen yang dipastikan berada pada Container A, didalam sini juga terdapat jsx dan css dari suatu komponen
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br />
                            <div class="accordion" id="accordionContainerB" style={{ textAlign: 'start', textIndent: 12 }}>
                              <div class="card">
                                <div class="card-header" id="headingContainerB">
                                  <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#ContainerB" aria-expanded="true" aria-controls="ContainerB">
                                      Container B
                                  </button>
                                  </h2>
                                </div>
                                <div id="ContainerB" class="collapse" aria-labelledby="headingContainerB" data-parent="#accordionContainerB">
                                  <div class="card-body">
                                    Merupakan folder yang berisikan jsx dan css dari suatu komponen, dan juga terdapat beberapa komponen children yang berkaitan
                                    <br /><br />
                                    <div class="accordion" id="accordionComponentChildBA" style={{ textAlign: 'start', textIndent: 12 }}>
                                      <div class="card">
                                        <div class="card-header" id="headingComponentChildAA">
                                          <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#ComponentChildAA" aria-expanded="true" aria-controls="ComponentChildAA">
                                              ComponentChild B.A
                                            </button>
                                          </h2>
                                        </div>
                                        <div id="ComponentChildAA" class="collapse" aria-labelledby="headingComponentChildAA" data-parent="#accordionComponentChildBA">
                                          <div class="card-body">
                                            Merupakan komponen yang dipastikan berada pada Container B, didalam sini juga terdapat jsx dan css dari suatu komponen
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <br />
                                    <div class="accordion" id="accordionComponentChildBB" style={{ textAlign: 'start', textIndent: 12 }}>
                                      <div class="card">
                                        <div class="card-header" id="headingComponentChildAB">
                                          <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#ComponentChildAB" aria-expanded="true" aria-controls="ComponentChildAB">
                                              ComponentChild B.B
                                            </button>
                                          </h2>
                                        </div>
                                        <div id="ComponentChildAB" class="collapse" aria-labelledby="headingComponentChildAB" data-parent="#accordionComponentChildBB">
                                          <div class="card-body">
                                            Merupakan komponen yang dipastikan berada pada Container B, didalam sini juga terdapat jsx dan css dari suatu komponen
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br />
                            <div class="accordion" id="accordionPages" style={{ textAlign: 'start', textIndent: 12 }}>
                              <div class="card">
                                <div class="card-header" id="headingPages">
                                  <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#Pages" aria-expanded="true" aria-controls="Pages">
                                      Pages
                                  </button>
                                  </h2>
                                </div>
                                <div id="Pages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionPages">
                                  <div class="card-body">
                                    Berisi kumpulan folder dari suatu page pada project, folde page disini juga bersifat komponen
                                    <br /><br />
                                    <div class="accordion" id="accordionPagesA" style={{ textAlign: 'start', textIndent: 12 }}>
                                      <div class="card">
                                        <div class="card-header" id="headingPagesA">
                                          <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#PagesA" aria-expanded="true" aria-controls="PagesA">
                                              Pages A
                                            </button>
                                          </h2>
                                        </div>
                                        <div id="PagesA" class="collapse" aria-labelledby="headingPagesA" data-parent="#accordionPagesA">
                                          <div class="card-body">
                                            Merupakan suatu page terpisah yang berisi jsx dan css
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <br />
                                    <div class="accordion" id="accordionPagesB" style={{ textAlign: 'start', textIndent: 12 }}>
                                      <div class="card">
                                        <div class="card-header" id="headingPagesB">
                                          <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#PagesB" aria-expanded="true" aria-controls="PagesB">
                                              Pages B
                                            </button>
                                          </h2>
                                        </div>
                                        <div id="PagesB" class="collapse" aria-labelledby="headingPagesB" data-parent="#accordionPagesB">
                                          <div class="card-body">
                                            Merupakan suatu page terpisah yang berisi jsx dan css
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerContext>
      </Container>
    </Frame>
  )
}

export default StructuringNaming