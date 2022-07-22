 <Tabs defaultActiveKey="1">
            <TabPane tab="Plot Search" key="1">
              <div className="plot_size_details">
                <div className="final_searchBar">
                  <div className="property">
                    <Input
                      placeholder="Enter Length"
                      name="length"
                      value={length}
                      onChange={handleinputChange}
                    />
                  </div>
              </div>
            </TabPane>
            <TabPane tab="Tools" key="2">
              <div className="add_plots_tools">
                <AddToolsTab />
                <div className="loyout_directions">
                  <Demo
                    dynamiclayout={dynamiclayout}
                    setDynamiclayout={setDynamiclayout}
                    setIsdynamic={setIsdynamic}
                  />
                </div>
              </div>
            </TabPane>
          </Tabs>
