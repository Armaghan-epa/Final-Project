import React from "react";
import axios from 'axios';
import config from "./../../config.json";

class AddMovie extends React.Component {
  
  
  state = {
      title: "",
      year : "",
      description : "",
      poster : "",
      added : null,
      errors: []
    };

    
    hasError(key) {
      return this.state.errors.indexOf(key) !== -1;
    }

    handleInputChange(event) {
      var key = event.target.name;
      var value = event.target.value;
      var obj = {};
      obj[key] = value;
      this.setState(obj);
    }

    validate(event){
      let errors = [];
      //title
      if (( event?.target?.name === 'title' || !event ) && this.state.title?.replace(/ /g, '') === "") {
        errors.push("title");
      }
      //year
      if (( event?.target?.name === 'year' || !event ) && this.state.year?.replace(/ /g, '') === "") {
        errors.push("year");
      }
      //description
      if (( event?.target?.name === 'description' || !event ) && this.state.description?.replace(/ /g, '') === "") {
        errors.push("description");
      }
      //poster
      if (( event?.target?.name === 'poster' || !event ) && this.state.poster?.replace(/ /g, '') === "") {
        errors.push("poster");
      }

      this.setState({
        errors: errors
      });

      return errors;
    }


    submitHandler(event) {

      event.preventDefault();
      let errors = this.validate();
      
      if (errors.length > 0) {
        
        return false;
      } 
      else {
        // ajax 
          let data = { 
            title : this.state.title , 
            year : this.state.year , 
            description : this.state.description , 
            poster : this.state.poster
          };

          // Handle CORS Error localehost
         

          axios.post(`${config.APP_URL}/create.php` , data)
              .then((response) =>{
                this.setState({ 
                  title : '',
                  year : '',
                  description : '',
                  poster : '',
                  added : true,
                });

                setTimeout(() => {
                  this.setState({ 
                    added : null,
                  })
                }, 5000);
              })
              .catch((err) => {
                console.log(err);

                this.setState({ 
                  added : false,
                });

                setTimeout(() => {
                  this.setState({ 
                    added : null,
                  })
                }, 5000);
                
              })
      
      }
    }

    render() {
      return (
        <>
          <div className="container">
            <div className="py-2 text-center">
              <h2>افزودن فیلم جدید</h2>
              <p className="lead">لطفا فیلد ها را تکمیل نمایید و سپس بر روی دکمه ثبت کلیک نمایید</p>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-8">
                <form className="needs-validation py-2" noValidate="" onSubmit={this.submitHandler.bind(this)}>
                  <div className="row g-3">

                    <div className="col-sm-6">
                      <label htmlFor="title" className="form-label">نام فیلم</label>
                      <input 
                        type="text" className={
                        this.hasError("title")
                          ? "form-control is-invalid"
                          : "form-control"
                        }
                        name="title"
                        id="title"
                        value={this.state.title}
                        onChange={this.handleInputChange.bind(this)}
                        onKeyUp={this.validate.bind(this)}
                      />

                      <div className="invalid-feedback">
                        فیلد ضروری
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="year" className="form-label">سال ساخت</label>
                      <input 
                        type="text" className={
                        this.hasError("year")
                          ? "form-control is-invalid"
                          : "form-control"
                        }
                        name="year"
                        id="year"
                        value={this.state.year}
                        onChange={this.handleInputChange.bind(this)}
                        onKeyUp={this.validate.bind(this)}
                        placeholder="2022"
                        style={{textAlign: "left"}}
                      />

                      <div className="invalid-feedback">
                        فیلد ضروری
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="description" className="form-label">توضیحات</label>
                      <textarea
                       className={
                        this.hasError("description")
                          ? "form-control is-invalid"
                          : "form-control"
                        } 
                        name="description"
                        id="description" 
                        value={this.state.description}
                        onChange={this.handleInputChange.bind(this)}
                        onKeyUp={this.validate.bind(this)}
                        rows="3" 
                      />
                    
                      <div className="invalid-feedback">
                        فیلد ضروری
                      </div>
                    </div>

              
                    <div className="col-12">
                      <label htmlFor="poster" className="form-label">لینک تصویر ( پوستر ) </label>
                      <input 
                        type="text" className={
                        this.hasError("poster")
                          ? "form-control is-invalid"
                          : "form-control"
                        }
                        name="poster"
                        id="poster"
                        value={this.state.poster}
                        onChange={this.handleInputChange.bind(this)}
                        onKeyUp={this.validate.bind(this)}
                        placeholder="https://image.com/movie.png"
                        style={{textAlign: "left"}}
                      />

                      <div className="invalid-feedback">
                        فیلد ضروری
                      </div>
                    </div>
                    
                  

                      {
                        this.state.added === true ? (<div className="alert alert-success" role="alert">
                        فیلم با موفقیت ثبت شد
                      </div>) : this.state.added !== null ? ( <div className="alert alert-danger" role="alert">
                        خطا در ثبت فیلم
                        </div>) : ("")
                      }
                    
                  

                    <button className="w-100 btn btn-primary btn-lg" type="submit">+ ثبت</button>

                  </div>
                </form>
              </div>
            </div>
          </div> 
        </>
      ) 
    }
}

export default AddMovie;