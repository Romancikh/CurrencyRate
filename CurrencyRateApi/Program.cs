using CurrencyRateApi.Helpers;
using CurrencyRateApi.Services;

var builder = WebApplication.CreateBuilder( args );

// Add services to the container.

builder.Services.AddDbContext<DataContext>();
builder.Services.AddCors();
// builder.Services.AddCors();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ICurrencyService, CurrencyService>();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors( x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader() );

app.UseMiddleware<ErrorHandlerMiddleware>();

app.MapControllers();

CurrencyHelper.AddCurrencyData( app );

app.Run();
