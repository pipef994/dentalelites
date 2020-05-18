import React from 'react';

class evolucion extends React.Component {

  constructor(args) {
    super(args)
    this.state = {
      date: ''
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <form>
        <div className="container">
          <div className="row">
            <div className='col-sm-6'>
              <div className="form-group">
                <div className='input-group date' id='date' name="date">
                  <input type='text' className="form-control" />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                  </span>
                </div>
              </div>
            </div>
            <script type="text/javascript">
              $(function () {
                $('#date').datetimepicker();
            });
        </script>
          </div>
        </div>
      </form>
    )
  }

}