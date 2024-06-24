

const Dashboard = () => {
  return (
    <>
    <div className="nk-content">
  <div className="container-fluid">
    <div className="nk-content-inner">
      <div className="nk-content-body">
        <div className="row g-gs">
          <div className="col-xl-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="card-title">
                      <h4 className="title mb-1">Congratulations Smith!</h4>
                      <p className="small">Best seller of the month</p>
                    </div>
                    <div className="my-3">
                      <div className="amount h2 fw-bold text-primary">
                        $42.5k
                      </div>
                      <div className="smaller">
                        You have done 69.5% more sales today.
                      </div>
                    </div>
                    <a href="#" className="btn btn-sm btn-primary">
                      View Sales
                    </a>
                  </div>
                  <div className="d-none d-sm-block d-xl-none d-xxl-block me-md-5 me-xxl-0">
                    <img src="images/award/a.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="card-title">
                  <h4 className="title">New Visitors</h4>
                </div>
                <div className="d-flex justify-content-between align-items-end gap g-2">
                  <div className="flex-grow-1">
                    <div className="smaller">
                      <strong className="text-base">48%</strong> new visitors{" "}
                      <span className="d-block">this week.</span>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <div className="amount h2 mb-0 fw-bold">16,328</div>
                      <div className="change up smaller ms-1">
                        <em className="icon ni ni-trend-up" /> 48
                      </div>
                    </div>
                  </div>
                  <div className="nk-chart-ecommerce-visitor">
                    <canvas
                      data-nk-chart="bar"
                      id="visitorChart"
                      width={248}
                      height={181}
                      style={{
                        display: "block",
                        boxSizing: "border-box",
                        height: "139.231px",
                        width: "190.769px",
                        direction: "ltr !important"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="card-title">
                  <h4 className="title">Activity</h4>
                </div>
                <div className="d-flex justify-content-between align-items-end gap g-2">
                  <div className="flex-grow-1">
                    <div className="smaller">
                      <strong className="text-base">70%</strong> new activity{" "}
                      <span className="d-block">this week.</span>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <div className="amount h2 mb-0 fw-bold">89,720</div>
                      <div className="change up smaller ms-1">
                        <em className="icon ni ni-trend-up" /> 38
                      </div>
                    </div>
                  </div>
                  <div className="nk-chart-ecommerce-activity">
                    <canvas
                      data-nk-chart="line"
                      id="activityChart"
                      width={241}
                      height={181}
                      style={{
                        display: "block",
                        boxSizing: "border-box",
                        height: "139.231px",
                        width: "185.385px"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-12">
            <div className="card h-100">
              <div className="card-body flex-grow-0 py-2">
                <div className="card-title-group">
                  <div className="card-title">
                    <h4 className="title">Top Selling Products</h4>
                  </div>
                  <div className="card-tools">
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-sm btn-icon btn-zoom me-n1"
                        data-bs-toggle="dropdown"
                      >
                        <em className="icon ni ni-more-v" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                        <li>
                          <div className="dropdown-header pt-2 pb-0">
                            <h6 className="mb-0">Options</h6>
                          </div>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Low to high
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            High to low
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-middle mb-0">
                  <thead className="table-light table-head-sm">
                    <tr>
                      <th className="tb-col">
                        <span className="overline-title">products</span>
                      </th>
                      <th className="tb-col tb-col-end tb-col-sm">
                        <span className="overline-title">price</span>
                      </th>
                      <th className="tb-col tb-col-end tb-col-sm">
                        <span className="overline-title">orders</span>
                      </th>
                      <th className="tb-col tb-col-end tb-col-sm">
                        <span className="overline-title">stock</span>
                      </th>
                      <th className="tb-col tb-col-end">
                        <span className="overline-title">amount</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tb-col">
                        <div className="media-group">
                          <div className="media media-md flex-shrink-0 media-middle media-circle">
                            <img src="images/product/a.jpg" alt="" />
                          </div>
                          <div className="media-text">
                            <span className="title">Nike v22 Running</span>
                            <span className="text smaller">28 Jul 2022</span>
                          </div>
                        </div>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="small">$130.20</span>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="small">38</span>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="small">436</span>
                      </td>
                      <td className="tb-col tb-col-end">
                        <span className="small">$14,945</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="tb-col">
                        <div className="media-group">
                          <div className="media media-md flex-shrink-0 media-middle media-circle">
                            <img src="images/product/b.jpg" alt="" />
                          </div>
                          <div className="media-text">
                            <span className="title">Business Kit (Mug)</span>
                            <span className="text smaller">16 Oct 2022</span>
                          </div>
                        </div>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="small">$18.35</span>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="small">12</span>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="badge text-bg-danger-soft">
                          Out of Stock
                        </span>
                      </td>
                      <td className="tb-col tb-col-end">
                        <span className="small">$7,458</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="tb-col">
                        <div className="media-group">
                          <div className="media media-md flex-shrink-0 media-middle media-circle">
                            <img src="images/product/c.jpg" alt="" />
                          </div>
                          <div className="media-text">
                            <span className="title">Borosil Paper Cup</span>
                            <span className="text smaller">21 Feb 2022</span>
                          </div>
                        </div>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="small">$328.00</span>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="small">120</span>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="small">867</span>
                      </td>
                      <td className="tb-col tb-col-end">
                        <span className="small">$7,806</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="tb-col">
                        <div className="media-group">
                          <div className="media media-md flex-shrink-0 media-middle media-circle">
                            <img src="images/product/d.jpg" alt="" />
                          </div>
                          <div className="media-text">
                            <span className="title">Mountain Trip Kit</span>
                            <span className="text smaller">14 Jun 2022</span>
                          </div>
                        </div>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="small">$130.20</span>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="small">184</span>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="small">226</span>
                      </td>
                      <td className="tb-col tb-col-end">
                        <span className="small">$17,945</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="tb-col">
                        <div className="media-group">
                          <div className="media media-md flex-shrink-0 media-middle media-circle">
                            <img src="images/product/e.jpg" alt="" />
                          </div>
                          <div className="media-text">
                            <span className="title">One Seater Sofa</span>
                            <span className="text smaller">28 Jul 2022</span>
                          </div>
                        </div>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="small">$130.20</span>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="small">50</span>
                      </td>
                      <td className="tb-col tb-col-end tb-col-sm">
                        <span className="badge text-bg-warning-soft">
                          Low Stock
                        </span>
                      </td>
                      <td className="tb-col tb-col-end">
                        <span className="small">$14,945</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-xxl-8">
            <div className="card h-100">
              <div className="row g-0 col-sep col-sep-md">
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="card-title-group mb-4">
                      <div className="card-title">
                        <h4 className="title">Total Profit</h4>
                      </div>
                    </div>
                    <div className="nk-chart-ecommerce-total-profit">
                      <canvas
                        data-nk-chart="bar"
                        id="totalProfitChart"
                        width={586}
                        height={418}
                        style={{
                          display: "block",
                          boxSizing: "border-box",
                          height: "321.538px",
                          width: "450.769px"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-body d-flex flex-column justify-content-center">
                    <div className="total-profit-data">
                      <div className="amount-wrap pb-4">
                        <div className="amount h2 mb-0 fw-bold">$842.50k</div>
                        <span className="smaller">
                          Last month balance $428.20k
                        </span>
                      </div>
                      <ul className="nk-data-list-group d-flex flex-column flex-sm-row flex-md-column gap g-4">
                        <li className="nk-data-list-item">
                          <div className="media media-middle media-circle text-bg-primary-soft">
                            <em className="icon ni ni-coins" />
                          </div>
                          <div className="amount-wrap">
                            <div className="amount h3 mb-0">$68,740</div>
                            <span className="smaller">Total Income</span>
                          </div>
                        </li>
                        <li className="nk-data-list-item">
                          <div className="media media-middle media-circle text-bg-success-soft">
                            <em className="icon ni ni-trend-up" />
                          </div>
                          <div className="amount-wrap">
                            <div className="amount h3 mb-0">$38,643</div>
                            <span className="smaller">Total Profit</span>
                          </div>
                        </li>
                        <li className="nk-data-list-item">
                          <div className="media media-middle media-circle text-bg-secondary-soft">
                            <em className="icon ni ni-coin-alt" />
                          </div>
                          <div className="amount-wrap">
                            <div className="amount h3 mb-0">$12,836</div>
                            <span className="smaller">Total Expense</span>
                          </div>
                        </li>
                      </ul>
                      <div className="pt-5">
                        <a href="#" className="btn btn-primary">
                          View Report
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4">
            <div className="row g-gs">
              <div className="col-sm-6 col-xl-3 col-xxl-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="media media-middle media-circle text-bg-warning mb-3">
                      <em className="icon ni ni-trend-up" />
                    </div>
                    <h5>Transactions</h5>
                    <div className="d-flex align-items-center mb-3">
                      <div className="amount h4 mb-0">$14.3k</div>
                      <div className="change up smaller ms-1">
                        <em className="icon ni ni-plus" /> 12%
                      </div>
                    </div>
                    <p className="small">Daily Transactions</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3 col-xxl-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="media media-middle media-circle text-bg-success mb-3">
                      <em className="icon ni ni-sign-mxn" />
                    </div>
                    <h5>Revenue</h5>
                    <div className="d-flex align-items-center mb-3">
                      <div className="amount h4 mb-0">$37.2k</div>
                      <div className="change up smaller ms-1">
                        <em className="icon ni ni-plus" /> 18%
                      </div>
                    </div>
                    <p className="small">Revenue Increase</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3 col-xxl-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="text-center amount h4 mb-3">185k</div>
                    <div className="text-center">
                      <div
                        className="nk-chart-ecommerce-knob js-pureknob"
                        data-size={120}
                        data-value={65}
                        data-angle-offset="-0.5"
                        data-angle-start="0.5"
                        data-angle-end="0.5"
                        data-color-fg="#0EA5E9"
                      >
                        <div
                          style={{
                            display: "inline-block",
                            height: 120,
                            position: "relative",
                            textAlign: "center",
                            width: 120
                          }}
                        >
                          <canvas
                            height={155}
                            width={155}
                            style={{ height: 120, width: 120 }}
                          />
                          <div
                            style={{
                              inset: 0,
                              display: "none",
                              position: "absolute"
                            }}
                          >
                            <input
                              style={{
                                appearance: "textfield",
                                backgroundColor: "rgba(0, 0, 0, 0.8)",
                                border: "none",
                                color: "rgb(14, 165, 233)",
                                fontFamily: "sans-serif",
                                fontSize: 24,
                                height: 120,
                                margin: "auto",
                                padding: 0,
                                textAlign: "center",
                                width: 120
                              }}
                              inputMode="numeric"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="small mt-3">Total Sales</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3 col-xxl-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="text-center amount h4 mb-0">$64.35k</div>
                    <div className="nk-chart-ecommerce-total-revenue">
                      <canvas
                        data-nk-chart="line"
                        id="totalRevenueChart"
                        width={158}
                        height={111}
                        style={{
                          display: "block",
                          boxSizing: "border-box",
                          height: "85.3846px",
                          width: "121.538px"
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <p className="small mt-3">Total Revenue</p>
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
</>
  );
};

export default Dashboard;
